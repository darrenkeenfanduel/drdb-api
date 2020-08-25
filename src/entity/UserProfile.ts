import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

@ObjectType()
@Entity()
export class UserProfile extends BaseTableEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  dob?: string;

  @Field()
  @Column('boolean', { default: false })
  marketing_preference: boolean;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  marketing_method_preference?: string;
}
