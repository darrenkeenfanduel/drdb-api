import { UserProfile } from './UserProfile';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
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

  @Field(() => [String])
  @Column('text', { array: true, default: '{}' })
  roles: string[];

  @Column()
  password: string;

  @OneToOne(() => UserProfile)
  @Field(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;
}
