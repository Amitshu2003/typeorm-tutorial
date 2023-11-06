import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Person } from "./Person";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  gender!: string;

  @Column()
  photo!: string;

  @OneToOne(()=>Person, person=>person.profile)
  person!: Person
}
