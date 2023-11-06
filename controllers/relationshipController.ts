import { AppDataSource } from "../dataSource";
import { Person } from "../ent-rel/Person";
import { Profile } from "../ent-rel/Profile";
import {Employee} from "../ent-rel/Employee";
import { Photo } from "../ent-rel/Photo";
import { Category } from "../ent-rel/Category";
import { Question } from "../ent-rel/Question";



const manager = AppDataSource.manager;

export const createPeople = async (req: any, res: any) => {
    let profile = new Profile()
    profile.gender = "male"
    profile.photo = "xyz.jpg"

    await manager.save(profile)

    let person = new Person()
    person.name = "sumit"
    person.profile = profile

    let data = await manager.save(person)

    res.send(data)
};

export const createEmployee = async (req:any, res:any)=>{
    // ***** 1st type *****
    // let employee = new Employee()
    // employee.name = "amit"

    // let data = await manager.save(employee)

    // let p1 = new Photo()
    // p1.url = "abc.jpg"
    // p1.employee = employee
    // await manager.save(p1)

    // let p2 = new Photo()
    // p2.url = "xyz.jpg"
    // p2.employee = employee
    // await manager.save(p2)

    // ***** 2nd type *****
    let p1 = new Photo()
    p1.url = "abcd.jpg"
    await manager.save(p1)

    let p2 = new Photo()
    p2.url = "xyzw.jpg"
    await manager.save(p2)

    let employee = new Employee()
    employee.name = "amit"
    employee.photos = [p1,p2]

    let data = await manager.save(employee)

    res.send(data)
}

export const createQuestion = async (req:any, res:any)=>{
    const c1 = new Category()
    c1.name = "sport"
    await manager.save(c1)

    const c2 = new Category()
    c2.name = "news"
    await manager.save(c2)

    const q1 = new Question()
    q1.title = "what is cricket part 2?"
    q1.categories = [c1,c2]
    let data = await manager.save(q1)

    res.send(data)
}