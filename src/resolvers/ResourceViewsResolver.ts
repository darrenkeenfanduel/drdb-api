import { ApolloError } from 'apollo-server-express';
import { ResourceViews } from './../entity/ResourceViews';
import { Resource } from './../entity/Resource';
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

@InputType()
class ResourceViewInput {
  @Field(() => Int)
  resourceId: number;
  updatedAt?: string;
}

@Resolver()
export class ResourceViewsResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async newResourceView(
    @Arg('options', () => ResourceViewInput) options: ResourceViewInput
  ) {
    const currentViewRow = await ResourceViews.findOne(options.resourceId);
    const updatedAt = Math.floor(Number(new Date())).toString();
    if (currentViewRow) {
      currentViewRow.updatedAt = updatedAt;
      const update = await ResourceViews.update(
        { id: currentViewRow.id },
        { total: currentViewRow.total + 1, updatedAt }
      );
      if (update.affected && update.affected > 0) {
        return true;
      }
      throw new ApolloError('Nothing was updated');
    }
    const resource = await Resource.findOne(options.resourceId);
    if (!resource) {
      throw new ApolloError('No resource exists');
    }

    const newResourceViewsRow = await ResourceViews.create({ resource }).save();
    await Resource.update(resource.id, {
      views: newResourceViewsRow,
      updatedAt,
    });

    return true;
  }

  @Query(() => [ResourceViews])
  resourceViews() {
    return ResourceViews.find({ relations: ['resource'] });
  }
}
