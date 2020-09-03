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
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

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
  constructor(
    @InjectRepository(UserRole)
    private readonly userRoleRepo: Repository<UserRole>
  ) {}
  @Mutation(() => UserRole)
  @UseMiddleware(isAuth)
  async createUserRole(
    @Arg('options', () => UserRoleInput) options: UserRoleInput
  ) {
    const userRole = await this.userRoleRepo.create(options).save();
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
    const res = await this.userRoleRepo.delete({ id });
    if (res.affected) {
      return true;
    }
    return false;
  }

  @Query(() => [UserRole])
  userRoles() {
    return this.userRoleRepo.find();
  }
}
