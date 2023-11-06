import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Photo} from './Photo'


@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @OneToMany(()=>Photo, photo=>photo.employee)
    photos !: Photo[]
}