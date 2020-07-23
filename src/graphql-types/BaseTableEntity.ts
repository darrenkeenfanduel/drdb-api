import { BaseEntity, Column, BeforeUpdate, BeforeInsert } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export abstract class BaseTableEntity extends BaseEntity {
  @Field()
  @Column({ name: 'created_at', nullable: true })
  public createdAt: string;

  @Field()
  @Column({ name: 'updated_at', nullable: true })
  public updatedAt: string;

  @BeforeUpdate()
  public setUpdatedAt() {
    this.updatedAt = Math.floor(Number(new Date())).toString();
  }

  @BeforeInsert()
  public setCreatedAt() {
    this.updatedAt = Math.floor(Number(new Date())).toString();
    this.createdAt = Math.floor(Number(new Date())).toString();
  }
}
