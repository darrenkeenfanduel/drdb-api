import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
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

  @Field(() => Int)
  @Column('int', { default: 60 })
  minutes: number;

  @Field(() => [String])
  @Column('text', { array: true })
  languages: string[];
}
