import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import {Employee} from './Employee'

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    url!: string

    @ManyToOne(()=>Employee, employee=>employee.photos)
    employee!:Employee

}