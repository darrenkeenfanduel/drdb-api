import {
  Resolver,
  Mutation,
  Arg,
  Query,
  InputType,
  Field,
  Int,
  UseMiddleware,
  Ctx,
} from 'type-graphql';
import { ApolloError } from 'apollo-server-express';

import { MyContext } from './../graphql-types/MyContext';
import { UserFavourite } from './../entity/UserFavourite';
import { Resource } from './../entity/Resource';
import { User } from './../entity/User';
import { UserRole } from '../entity/UserRole';
import { isAuth } from '../middleware/isAuth';

@InputType()
class UserFavouriteInput {
  @Field(() => Int)
  resourceId: number;
}

@Resolver()
export class UserFavouriteResolver {
  @Mutation(() => UserFavourite)
  @UseMiddleware(isAuth)
  async createUserFavourite(
    @Ctx() ctx: MyContext,
    @Arg('options', () => UserFavouriteInput) options: UserFavouriteInput
  ) {
    const user = await User.findOne(ctx.req.userId);
    if (!user) {
      throw new ApolloError('No user');
    }

    const resource = await Resource.findOne(options.resourceId);
    if (!resource) {
      throw new ApolloError('No resource');
    }

    const data = {
      user,
      resource,
    };
    const userFavourite = await UserFavourite.create(data).save();
    return userFavourite;
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

  // @Mutation(() => Boolean)
  // @UseMiddleware(isAuth)
  // async deleteUserRole(@Arg('id', () => Int) id: number) {
  //   const res = await UserRole.delete({ id });
  //   if (res.affected) {
  //     return true;
  //   }
  //   return false;
  // }

  @Query(() => [UserFavourite])
  userFavourite() {
    return UserFavourite.find({ relations: ['user', 'resource'] });
  }
}
