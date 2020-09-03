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
} from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { ResourceViews } from './../entity/ResourceViews';
import { Resource } from './../entity/Resource';
import { isAuth } from '../middleware/isAuth';

@InputType()
class ResourceViewInput {
  @Field(() => Int)
  resourceId: number;
  updatedAt?: string;
}

@Resolver()
export class ResourceViewsResolver {
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepo: Repository<Resource>,
    @InjectRepository(ResourceViews)
    private readonly resourceViewsRepo: Repository<ResourceViews>
  ) {}

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async newResourceView(
    @Arg('options', () => ResourceViewInput) options: ResourceViewInput
  ) {
    const currentViewRow = await this.resourceViewsRepo.findOne(
      options.resourceId
    );
    const updatedAt = Math.floor(Number(new Date())).toString();
    if (currentViewRow) {
      currentViewRow.updatedAt = updatedAt;
      const update = await this.resourceViewsRepo.update(
        { id: currentViewRow.id },
        { total: currentViewRow.total + 1, updatedAt }
      );
      if (update.affected && update.affected > 0) {
        return true;
      }
      throw new ApolloError('Nothing was updated');
    }
    const resource = await this.resourceRepo.findOne(options.resourceId);
    if (!resource) {
      throw new ApolloError('No resource exists');
    }

    const newResourceViewsRow = await this.resourceViewsRepo
      .create({ resource })
      .save();
    await this.resourceRepo.update(resource.id, {
      views: newResourceViewsRow,
      updatedAt,
    });

    return true;
  }

  @Query(() => [ResourceViews])
  resourceViews() {
    return this.resourceViewsRepo.find({ relations: ['resource'] });
  }
}
