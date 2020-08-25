import { MyContext } from './../graphql-types/MyContext';
import { User } from './../entity/User';
import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field,
  UseMiddleware,
  Ctx,
} from 'type-graphql';

import { isAuth } from '../middleware/isAuth';
import { Resource } from '../entity/Resource';

@InputType()
class ResourceInput {
  @Field()
  title: string;
  @Field(() => Int)
  minutes: number;
  @Field(() => [String])
  languages: string[];
  @Field()
  small_description: string;
  @Field()
  description: string;
  @Field(() => Int, { nullable: true })
  length?: number;
  @Field(() => String, { nullable: true })
  author?: string;
  @Field(() => String, { nullable: true })
  author_url?: string;
  @Field()
  external_url: string;
  @Field()
  cost: string;
  @Field()
  type: string;
  @Field()
  level: string;
  added_by?: User;
}

@InputType()
class ResourceUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => Int, { nullable: true })
  minutes?: number;
  @Field(() => [String], { nullable: true })
  languages?: string[];
  updatedAt?: string;
}

@Resolver()
export class ResourceResolver {
  @Mutation(() => Resource)
  @UseMiddleware(isAuth)
  async createResource(
    @Ctx() ctx: MyContext,
    @Arg('options', () => ResourceInput) options: ResourceInput
  ) {
    const addedByUser = await User.findOne(ctx.req.userId);
    if (addedByUser) {
      options.added_by = addedByUser;
    }
    const resource = await Resource.create(options).save();
    return resource;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateResource(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => ResourceUpdateInput) input: ResourceUpdateInput
  ) {
    input.updatedAt = Math.floor(Number(new Date())).toString(); // TypeORM @BeforeUpdate doesnt trigger on .update, only save()
    await Resource.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteResource(@Arg('id', () => Int) id: number) {
    const res = await Resource.delete({ id });
    if (res.affected) {
      return true;
    }
    return false;
  }

  @Query(() => [Resource])
  resources() {
    return Resource.find({ relations: ['added_by', 'added_by.profile'] });
  }
}
