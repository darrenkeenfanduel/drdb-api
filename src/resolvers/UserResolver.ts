import argon2 from 'argon2';
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { v4 } from 'uuid';
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../constants';
import { User } from '../entity/User';
import { MyContext } from '../graphql-types/MyContext';
import { sendEmail } from '../utils/sendEmail';
import { validateRegister } from '../utils/validateRegister';

@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    if (req.session.userId === user.id) {
      // is current user so can show email
      return user.email;
    }

    // You are not the user for this user
    return '';
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { req, redis }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length <= 3) {
      return {
        errors: [
          { field: 'newPassword', message: 'Length must be greater than 3' },
        ],
      };
    }

    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);

    if (!userId) {
      return {
        errors: [{ field: 'token', message: 'Token expired' }],
      };
    }

    const userIdNum = parseInt(userId);
    const user = await User.findOne(userIdNum);

    if (!user) {
      return {
        errors: [{ field: 'token', message: 'User no longer exists' }],
      };
    }

    const hashedPassword = await argon2.hash(newPassword);

    await User.update({ id: userIdNum }, { password: hashedPassword });

    redis.del(key);

    // Log in after change
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      // No email in DB!!
      // Might not want to tell user email is incorrect, so just return true...
      return true;
    }

    const token = v4();

    await redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user.id,
      'ex',
      1000 * 60 * 60 * 24 * 3
    ); // 3 days

    const html = `<a href='http://localhost:3000/change-password/${token}'>ResetPassword</a>`;
    await sendEmail(email, html);
    return true;
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext): Promise<User | undefined> | undefined {
    if (!req.session.userId) {
      return undefined;
    }

    return User.findOne(req.session.userId, { relations: ['profile'] });
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }

    const hashedPassword = await argon2.hash(options.password);
    let user: User | null = null;

    try {
      await getConnection().transaction(async (tm) => {
        const addUser: User[] = await tm.query(
          `
          insert into "user" (username, "password", email)
          values ($1, $2, $3)
          returning id
        `,
          [options.username, hashedPassword, options.email]
        );
        if (!addUser || addUser.length === 0) {
          throw new Error();
        }
        user = addUser[0];
        await tm.query(
          `
          insert into "user_profile" ("userId", "avatar")
          values ($1, 'hello')
          `,
          [user.id]
        );
      });
    } catch (err) {
      if (err.code === '23505') {
        // || err.detail.includes('already exists')) {
        console.error(err.message);
        return {
          errors: [
            {
              field: 'username',
              message: 'Username already taken',
            },
          ],
        };
      }

      return {
        errors: [
          {
            field: 'username',
            message: 'Something went wrong',
          },
        ],
      };
    }

    // Store user id session
    // Will set cookie on the user
    // Keep them logged in
    req.session.userId = (user! as User).id;

    return { user: user! };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const isEmail = usernameOrEmail.includes('@');
    const user = await User.findOne({
      where: {
        [isEmail ? 'email' : 'username']: usernameOrEmail,
      },
    });
    if (!user) {
      return {
        errors: [
          {
            field: 'usernameOrEmail',
            message: "Username doesn't exist",
          },
        ],
      };
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        errors: [{ field: 'password', message: 'Incorrect password' }],
      };
    }

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.error(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
