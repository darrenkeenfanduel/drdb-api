import {
  Resolver,
  Mutation,
  Arg,
  Query,
  InputType,
  Field,
  Int,
  UseMiddleware,
} from 'type-graphql';

import { isAuth } from '../middleware/isAuth';
import { UserRole } from '../entity/UserRole';

@InputType()
class UserRoleInput {
  @Field()
  shortCode: string;
  @Field()
  title: string;
}

@Resolver()
export class UserRoleResolver {
  @Mutation(() => UserRole)
  @UseMiddleware(isAuth)
  async createUserRole(
    @Arg('options', () => UserRoleInput) options: UserRoleInput
  ) {
    const userRole = await UserRole.create(options).save();
    return userRole;
  }

  // @Mutation(() => Boolean)
  // @UseMiddleware(isAuth)
  // async updateUserRole(
  //   @Arg('id', () => Int) id: number,
  //   @Arg('input', () => UserRoleInput) input: UserRoleInput
  // ) {
  //   await UserRole.update({ id }, input);
  //   return true;
  // }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteUserRole(@Arg('id', () => Int) id: number) {
    const res = await UserRole.delete({ id });
    if (res.affected) {
      return true;
    }
    return false;
  }

  @Query(() => [UserRole])
  userRoles() {
    return UserRole.find();
  }
}
