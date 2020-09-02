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
  ArgsType,
  Args,
} from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
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

@ArgsType()
class GetUserFavouriteArgs {
  @Field(() => Int, { nullable: true })
  resourceId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@Resolver()
export class UserFavouriteResolver {
  constructor(
    @InjectRepository(UserFavourite)
    private readonly userFavouriteRepo: Repository<UserFavourite>,
    @InjectRepository(Resource)
    private readonly resourceRepo: Repository<Resource>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  @Mutation(() => UserFavourite)
  @UseMiddleware(isAuth)
  async createUserFavourite(
    @Ctx() ctx: MyContext,
    @Arg('options', () => UserFavouriteInput) options: UserFavouriteInput
  ) {
    const user = await this.userRepo.findOne(ctx.req.userId);
    if (!user) {
      throw new ApolloError('No user');
    }

    const resource = await this.resourceRepo.findOne(options.resourceId);
    if (!resource) {
      throw new ApolloError('No resource');
    }

    const data = {
      user,
      resource,
    };
    const userFavourite = await this.userFavouriteRepo.create(data).save();
    return userFavourite;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteUserFavourite(
    @Ctx() ctx: MyContext,
    @Arg('id', () => Int) id: number
  ) {
    const userFavourite = await this.userFavouriteRepo.findOne(id, {
      where: { user: { id: ctx.req.userId } },
    });
    if (!userFavourite) {
      throw new ApolloError('No matching favourite found');
    }

    const res = await this.userFavouriteRepo.delete({ id });
    if (res.affected) {
      return true;
    }
    return false;
  }

  @Query(() => [UserFavourite])
  userFavourite(@Args() { resourceId, userId }: GetUserFavouriteArgs) {
    const where: {
      resource?: number;
      user?: number;
    } = {
      ...(resourceId && { resource: resourceId }),
      ...(userId && { user: userId }),
    };

    return UserFavourite.find({ relations: ['user', 'resource'], where });
  }
}
