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
import { Min, Max } from 'class-validator';

@InputType()
class ResourceRatingInput {
  @Field(() => Int)
  resourceId: number;

  @Field()
  text: string;

  @Field(() => Int)
  @Min(1)
  @Max(5)
  rating: number;

  updatedAt?: string;
}

@ArgsType()
class GetResourceRatingArgs {
  @Field(() => Int, { nullable: true })
  resourceId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@Resolver()
export class ResourceRatingResolver {
  constructor(
    @InjectRepository(ResourceRating)
    private readonly resourceRatingRepo: Repository<ResourceRating>,
    @InjectRepository(Resource)
    private readonly resourceRepo: Repository<Resource>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async createResourceRating(
    @Ctx() ctx: MyContext,
    @Arg('options', () => ResourceRatingInput) options: ResourceRatingInput
  ) {
    const user = await this.userRepo.findOne(ctx.req.userId);
    if (!user) {
      throw new ApolloError('No user');
    }
    const resource = await this.resourceRepo.findOne(options.resourceId);
    if (!resource) {
      throw new ApolloError('No resource exists');
    }

    const existingReview = await this.resourceRatingRepo.findOne({
      where: { user: { id: user.id }, resource: { id: resource.id } },
    });

    if (existingReview) {
      throw new ApolloError('Already have rating');
    }

    await this.resourceRatingRepo
      .create({
        resource,
        user,
        rating: options.rating,
        text: options.text,
      })
      .save();

    return true;
  }

  @Query(() => [ResourceRating])
  async resourceRatings(@Args() { resourceId, userId }: GetResourceRatingArgs) {
    const where: {
      resource?: number;
      user?: number;
    } = {
      ...(resourceId && { resource: resourceId }),
      ...(userId && { user: userId }),
    };

    return this.resourceRatingRepo.find({
      where,
      relations: ['user', 'resource'],
    });
  }
}
