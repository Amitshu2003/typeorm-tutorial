import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student{
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: String;

  @Column()
  rollno!: number;
}
