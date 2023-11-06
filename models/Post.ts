import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: String;

  @Column()
  desc!: String;
}
