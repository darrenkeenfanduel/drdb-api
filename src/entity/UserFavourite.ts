import { Resource } from './Resource';
import { User } from './User';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

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
