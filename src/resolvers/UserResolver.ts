import {
  Resolver,
  Mutation,
  Arg,
  Int,
  UseMiddleware,
  InputType,
  Field,
} from 'type-graphql';
import * as Parallel from 'async-parallel';
import { ApolloError } from 'apollo-server-express';

import { isAuth, hasRoleOrOwner, hasRole } from '../middleware/isAuth';
import { UserRole } from './../entity/UserRole';
import { User } from './../entity/User';
import { UserProfile } from './../entity/UserProfile';

@InputType()
class updateUserRolesInput {
  @Field(() => [Int])
  roles: number[];
}

@InputType()
class updateUserProfileInput {
  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  dob?: string;

  @Field(() => Boolean, { nullable: true })
  marketing_preference?: boolean;

  @Field(() => String, { nullable: true })
  marketing_method_preference?: string;

  updatedAt?: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth, hasRoleOrOwner('su'))
  async updateUserProfile(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => updateUserProfileInput) input: updateUserProfileInput
  ) {
    input.updatedAt = Math.floor(Number(new Date())).toString(); // TypeORM @BeforeUpdate doesnt trigger on .update, only save()
    await UserProfile.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth, hasRole('su'))
  async updateUsersRoles(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => updateUserRolesInput) input: updateUserRolesInput
  ) {
    const usersRoles: string[] = await Parallel.reduce<number, string[]>(
      input.roles,
      async (acc, val) => {
        const role = await UserRole.findOne({ where: { id: val } });
        if (role) {
          acc.push(role.shortCode);
        }
        return acc;
      },
      []
    );

    const updatedAt = Math.floor(Number(new Date())).toString();

    const update = await User.update({ id }, { roles: usersRoles, updatedAt });
    if (update.affected === 0) {
      throw new ApolloError('did not update');
    }
    return true;
  }
}
