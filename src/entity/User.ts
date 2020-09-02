import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';
import { ResourceRating } from './ResourceRating';

import { Resource } from './Resource';
import { UserProfile } from './UserProfile';

@ObjectType({ description: 'User model' })
@Entity()
export class User extends BaseTableEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  first_name: string;

  @Field()
  @Column()
  last_name: string;

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

  @OneToMany(() => Resource, (resource) => resource.added_by)
  resources: Resource[];

  @OneToOne(() => UserProfile)
  @Field(() => UserProfile, { description: 'Attached profile of user' })
  @JoinColumn()
  profile: UserProfile;
}
