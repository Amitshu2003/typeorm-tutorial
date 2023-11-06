import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @ManyToMany(() => Category, category=>category.questions)
  @JoinTable()
  categories!: Category[];
}
