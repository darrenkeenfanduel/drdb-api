import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field,
  UseMiddleware,
} from 'type-graphql';

import { isAuth } from '../middleware/isAuth';
import { Video } from '../entity/Video';

@InputType()
class VideoInput {
  @Field()
  title: string;
  @Field(() => Int)
  minutes: number;
  @Field(() => [String])
  languages: string[];
}

@InputType()
class VideoUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => Int, { nullable: true })
  minutes?: number;
  @Field(() => [String], { nullable: true })
  languages?: string[];
}

@Resolver()
export class VideoResolver {
  @Mutation(() => Video)
  @UseMiddleware(isAuth)
  async createVideo(@Arg('options', () => VideoInput) options: VideoInput) {
    console.log(options);
    const video = await Video.create(options).save();
    return video;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async updateVideo(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => VideoUpdateInput) input: VideoUpdateInput
  ) {
    await Video.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteVideo(@Arg('id', () => Int) id: number) {
    await Video.delete({ id });
    return true;
  }

  @Query(() => [Video])
  videos() {
    return Video.find();
  }
}
