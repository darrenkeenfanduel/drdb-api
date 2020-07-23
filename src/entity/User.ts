import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

@ObjectType()
@Entity()
export class User extends BaseTableEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { default: 0 })
  count: number;

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Column()
  password: string;
}
