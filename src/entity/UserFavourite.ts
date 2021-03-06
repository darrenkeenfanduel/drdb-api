import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

import { User } from './User';
import { Resource } from './Resource';

@ObjectType()
@Entity()
export class UserFavourite extends BaseTableEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Resource)
  @Field(() => Resource)
  resource: Resource;
}
