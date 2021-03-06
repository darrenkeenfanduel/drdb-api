import bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation, Resolver, Query } from 'type-graphql';
import addDays from 'date-fns/addDays';
import addMinutes from 'date-fns/addMinutes';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { createTokens } from './../auth';
import { User } from '../entity/User';
import { UserProfile } from './../entity/UserProfile';
import { AuthInput, RegisterInput } from '../graphql-types/AuthInput';
import { MyContext } from '../graphql-types/MyContext';
import { UserResponse } from '../graphql-types/UserResponse';

const invalidLoginResponse = {
  errors: [
    {
      path: 'email',
      message: 'invalid login',
    },
  ],
};

@Resolver()
export class AuthResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(UserProfile)
    private readonly userProfileRepo: Repository<UserProfile>
  ) {}

  @Mutation(() => UserResponse)
  async register(
    @Arg('input')
    { email, password, first_name, last_name }: RegisterInput
  ): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const existingUser = await this.userRepo.findOne({ email });

    if (existingUser) {
      return {
        errors: [
          {
            path: 'email',
            message: 'already in use',
          },
        ],
      };
    }

    const profile = await this.userProfileRepo.create().save();

    const user = await this.userRepo
      .create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
        profile,
      })
      .save();

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('input') { email, password }: AuthInput,
    @Ctx() ctx: MyContext
  ): Promise<UserResponse> {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      return invalidLoginResponse;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return invalidLoginResponse;
    }

    const { refreshToken, accessToken } = createTokens(user);

    ctx.res.cookie('refresh-token', refreshToken, {
      expires: addDays(new Date(), 7),
    });

    ctx.res.cookie('access-token', accessToken, {
      expires: addMinutes(new Date(), 15),
    });
    return { user };
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    if (!ctx.req.userId) {
      return undefined;
    }

    return this.userRepo.findOne(ctx.req.userId, { relations: ['profile'] });
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
    if (ctx.req.userId) {
      ctx.res.clearCookie('refresh-token');
      ctx.res.clearCookie('access-token');
      return true;
    }
    return false;
  }

  @Mutation(() => Boolean)
  async invalidateTokens(@Ctx() ctx: MyContext): Promise<Boolean> {
    if (!ctx.req.userId) {
      return false;
    }

    const user = await this.userRepo.findOne(ctx.req.userId);
    if (!user) {
      return false;
    }

    user.count += 1;
    await user.save();

    return true;
  }
}
