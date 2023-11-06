import { AppDataSource } from "../dataSource";
import { Category } from "../ent-rel/Category";
import { Employee } from "../ent-rel/Employee";
import { Person } from "../ent-rel/Person";
import { Photo } from "../ent-rel/Photo";
import { Profile } from "../ent-rel/Profile";
import { Question } from "../ent-rel/Question";

export const getPersonAndProfile = async (req:any, res:any)=>{
    // *** 1. get a person and associated profile details
    // const personRepo = AppDataSource.getRepository(Person)
    // let data = await personRepo.find({relations:["profile"]})
    // res.send(data)

    // *** 2. get a profile and associated person details
    const profileRepo = AppDataSource.getRepository(Profile)
    let data = await profileRepo.find({relations:["person"]})
    res.send(data)
}

export const getEmployeeAndPhoto = async (req:any, res:any)=>{
    // *** get a employee and all assoicated photos
    const employeeRepo = AppDataSource.getRepository(Employee)
    let data = await employeeRepo.find({relations:["photos"]})
    res.send(data)
}

export const getPhotoAndEmployee = async (req:any, res:any)=>{
    // *** get a photo and all associated employees
    const photoRepo = AppDataSource.getRepository(Photo)
    let data = await photoRepo.find({relations:["employee"]})
    res.send(data)
}

export const getQuestionAndCategory = async (req:any, res:any)=>{
    // *** 1. get a question and all associated categories
    // const qnRepo = AppDataSource.getRepository(Question)
    // let data = await qnRepo.find({relations:["categories"]})
    // res.send(data)

    // *** 2. get a category and all associated questions
    const catgRepo = AppDataSource.getRepository(Category)
    let data = await catgRepo.find({relations:["questions"]})
    res.send(data)
}
