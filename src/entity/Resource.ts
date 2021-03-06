import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { ResourceViews } from './ResourceViews';
import { User } from './User';
import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

@ObjectType()
@Entity()
export class Resource extends BaseTableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  small_description: string;

  @Field()
  @Column()
  description: string;

  @Field(() => Int, { nullable: true })
  @Column('int', { nullable: true })
  length?: number;

  @Field()
  @Column('text', { default: 'unknown' })
  author?: string;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  author_url?: string;

  @Field()
  @Column()
  external_url: string;

  @ManyToOne(() => User, (user) => user.resources)
  @Field(() => User)
  @JoinColumn()
  added_by: User;

  @OneToOne(() => ResourceViews, (resourceViews) => resourceViews.resource)
  @Field(() => ResourceViews, { nullable: true })
  @JoinColumn()
  views?: ResourceViews;

  @Field()
  @Column()
  cost: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  level: string;
}
