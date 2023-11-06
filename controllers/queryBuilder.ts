import { AppDataSource } from "../dataSource";
import { Person } from "../ent-rel/Person";

export const getDataUsingQueryBuilder = async (req:any, res:any)=>{
    // ******* select *********
    // let data = await AppDataSource
    // .createQueryBuilder()
    // .select("person")
    // .from(Person,"person")
    // .getManyAndCount()
    // .getOne()
    // .getMany()
    // .getCount()

    // ****** select using repository
    // let data = await AppDataSource
    // .getRepository(Person)
    // .createQueryBuilder("person")
    // .getMany()


    // ***** where *****
    // let data = await AppDataSource
    // .getRepository(Person)
    // .createQueryBuilder("person")
    // .where("person.id = :id",{id:1})
    // .orWhere("person.name = :pname", {pname:"sumit"})
    // .andWhere("person.name = :pname", {pname:"amit"})
    // .orderBy("person.id","DESC")
    // .limit(1)
    // .offset(1)
    // .skip(1)
    // .getMany()

    // ***** Joins *****
    // let data = await AppDataSource
    // .getRepository(Person)
    // .createQueryBuilder("p")
    // .leftJoinAndSelect("p.profile","profile", "p.name = :name", {name:"amit"})
    // .leftJoinAndSelect("p.profile","profile")
    // .getRawMany()
    // .getMany()

    // ***** INSERT *****
    // let data = await AppDataSource
    // .createQueryBuilder()
    // .insert()
    // .into(Person)
    // .values([
    //     {
    //         name:"mahesh"
    //     },
    //     {
    //         name:"ram"
    //     }
    // ])
    // .execute()

    // ***** update *****
    // let data = await AppDataSource
    // .createQueryBuilder()
    // .update(Person)
    // .set({name : "amit shukla"})
    // .where("id=:id", {id:1})
    // .execute()

    // ***** Delete *****
    // let data = await AppDataSource
    // .createQueryBuilder()
    // .delete()
    // .from(Person)
    // .where("id = :id",{id:4})
    // .execute()

    // res.json(data)
}