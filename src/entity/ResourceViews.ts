import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

import { Resource } from './Resource';
@ObjectType()
@Entity()
export class ResourceViews extends BaseTableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { defaultValue: 1 })
  @Column('int', { default: 1 })
  total: number;

  @OneToOne(() => Resource, (resource) => resource.views)
  @Field(() => Resource)
  @JoinColumn()
  resource: Resource;
}
