import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Resource } from '../entity/Resource';
import { User } from '../entity/User';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from './../graphql-types/MyContext';

@InputType()
class ResourceInput {
  @Field()
  title: string;

  @Field(() => [String])
  languages: string[];

  @Field()
  small_description: string;

  @Field()
  description: string;

  @Field(() => Int, { nullable: true })
  length: number | null;

  @Field(() => String, { nullable: true })
  author: string | null;

  @Field(() => String, { nullable: true })
  author_url: string | null;

  @Field()
  external_url: string;

  @Field()
  cost: string;

  @Field()
  type: string;

  @Field()
  level: string;
}

@ObjectType()
class PaginatedResources {
  @Field(() => [Resource])
  resources: Resource[];
  @Field()
  hasMore: boolean;
}

@InputType()
class ResourceUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => [String], { nullable: true })
  languages?: string[];

  @Field(() => String, { nullable: true })
  smallDescription?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  length?: number;

  @Field(() => String, { nullable: true })
  author: string | null;

  @Field(() => String, { nullable: true })
  authorUrl: string | null;

  @Field(() => String, { nullable: true })
  externalUrl?: string;

  @Field(() => String, { nullable: true })
  cost?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  level?: string;
}

@Resolver(Resource)
export class ResourceResolver {
  @FieldResolver(() => User)
  addedBy(@Root() resource: Resource, @Ctx() { userLoader }: MyContext) {
    return userLoader.load(resource.addedById);
  }

  @Query(() => Resource, { nullable: true })
  resource(@Arg('id', () => Int) id: number): Promise<Resource | undefined> {
    return Resource.findOne(id);
  }

  @Query(() => PaginatedResources)
  async resources(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedResources> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const resources = await getConnection().query(
      `
        select r.*
        from resource r
        ${cursor ? `where r."createdAt" < $2` : ''}
        order by r."createdAt" DESC
        limit $1
      `,
      replacements
    );

    return {
      resources: resources.slice(0, realLimit),
      hasMore: resources.length === realLimitPlusOne,
    };
  }

  @Mutation(() => Resource)
  @UseMiddleware(isAuth)
  async createResource(
    @Ctx() { req }: MyContext,
    @Arg('input', () => ResourceInput) input: ResourceInput
  ): Promise<Resource> {
    if (!req.session.userId) {
      throw new Error('not authenticated');
    }
    return Resource.create({ ...input, addedById: req.session.userId }).save();
  }

  @Mutation(() => Resource, { nullable: true })
  @UseMiddleware(isAuth)
  async updateResource(
    @Ctx() { req }: MyContext,
    @Arg('id', () => Int) id: number,
    @Arg('input', () => ResourceUpdateInput) input: ResourceUpdateInput
  ): Promise<Resource | null> {
    const resourceInput = { ...input };
    if (resourceInput.languages) {
      delete resourceInput.languages;
    }

    const result = await getConnection()
      .createQueryBuilder()
      .update(Resource)
      .set(resourceInput)
      .where('id = :id and "addedById" = :addedById', {
        id,
        addedById: req.session.userId,
      })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteResource(
    @Ctx() { req }: MyContext,
    @Arg('id', () => Int) id: number
  ): Promise<Boolean> {
    await Resource.delete({ id, addedById: req.session.userId });
    return true;
  }
}
