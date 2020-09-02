import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

import { Resource } from './Resource';
import { User } from './User';
@ObjectType()
@Entity()
export class ResourceRating extends BaseTableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @Field(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Resource)
  @Field(() => Resource)
  @JoinColumn()
  resource: Resource;
}
