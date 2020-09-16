import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { BaseTableEntity } from '../graphql-types/BaseTableEntity';

import { Resource } from './Resource';
import { UserProfile } from './UserProfile';

@ObjectType({ description: 'User model' })
@Entity()
export class User extends BaseTableEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column({ nullable: true })
  firstName: string;

  @Field()
  @Column({ nullable: true })
  lastName: string;

  // @Field(() => [Int])
  // @Column('int', { array: true, default: '{}' })
  // roles: number[];

  @Column()
  password: string;

  @OneToMany(() => Resource, (resource) => resource.addedBy)
  resources: Resource[];

  @Field(() => UserProfile)
  @OneToOne(() => UserProfile, (userProfile) => userProfile.user)
  profile: UserProfile;
}
