import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';
import { User } from './User';

@ObjectType()
@Entity()
export class Resource extends BaseTableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  smallDescription!: string;

  @Field()
  @Column()
  description!: string;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  length: number | null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', default: 'unknown', nullable: true })
  author: string | null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  authorUrl: string | null;

  @Field()
  @Column()
  externalUrl!: string;

  @Field()
  @Column()
  addedById: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.resources)
  addedBy: User;

  // @OneToOne(() => ResourceViews, (resourceViews) => resourceViews.resource)
  // @Field(() => ResourceViews, { nullable: true })
  // @JoinColumn()
  // views?: ResourceViews;

  @Field()
  @Column()
  cost!: string;

  @Field()
  @Column()
  type!: string;

  @Field()
  @Column()
  level!: string;
}
