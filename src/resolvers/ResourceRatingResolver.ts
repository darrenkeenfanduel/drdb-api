import { ApolloError } from 'apollo-server-express';
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

import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../graphql-types/MyContext';
import { User } from '../entity/User';
import { Resource } from '../entity/Resource';
import { ResourceRating } from '../entity/ResourceRating';

@InputType()
class ResourceRatingInput {
  @Field(() => Int)
  resourceId: number;
  updatedAt?: string;
}

@InputType()
class WhereResource {
  @Field(() => String, { nullable: true })
  title?: string;
}

@ArgsType()
class GetResourceRatingArgs {
  @Field(() => Int, { nullable: true })
  resourceId?: number;
}

@Resolver()
export class ResourceRatingResolver {
  constructor(
    @InjectRepository(ResourceRating)
    private readonly resourceRatingRepo: Repository<ResourceRating>
  ) {}

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async createResourceRating(
    @Ctx() ctx: MyContext,
    @Arg('options', () => ResourceRatingInput) options: ResourceRatingInput
  ) {
    const user = await User.findOne(ctx.req.userId);
    if (!user) {
      throw new ApolloError('No user');
    }
    const resource = await Resource.findOne(options.resourceId);
    if (!resource) {
      throw new ApolloError('No resource exists');
    }

    await ResourceRating.create({ resource, user }).save();

    return true;
  }

  @Query(() => [ResourceRating])
  async resourceRatings(@Args() { resourceId }: GetResourceRatingArgs) {
    if (resourceId) {
      return this.resourceRatingRepo.find({
        where: { resource: resourceId },
        relations: ['user', 'resource'],
      });
    }
    return this.resourceRatingRepo.find({ relations: ['user', 'resource'] });
  }
}
