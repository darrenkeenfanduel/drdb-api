import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';
import { User } from './User';

@ObjectType()
@Entity()
export class UserProfile extends BaseTableEntity {
  @Field()
  @PrimaryColumn()
  userId: number;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  avatar: string | null;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  dob: string | null;

  @Field()
  @Column('boolean', { default: false })
  marketingPreference: boolean;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  marketingMethodPreference: string | null;
}
