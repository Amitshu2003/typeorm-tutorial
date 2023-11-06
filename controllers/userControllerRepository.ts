import { AppDataSource } from "../dataSource";
import { User } from "../models/User";
import { Not, LessThan, Like, Between, IsNull } from "typeorm"; 

const userRepository = AppDataSource.getRepository(User);

// create user
export const createUser = async (req: any, res: any) => {
    let data = await userRepository.insert({
        name: "sumit",
        email: "s@g.com",
        phone: "676767676",
    });
    res.send(data);
};

// update user
export const updateUser = async (req: any, res: any) => {
    let data = await userRepository.update(12, {
        name: "amit",
    });
    res.send(data);
};

// Delete user
export const deleteUser = async (req: any, res: any) => {
    let data = await userRepository.delete({ id: 7 });
    res.send("user deleted successfully");
};

// fetch all users
export const getUsers = async (req: any, res: any) => {
    //   let data = await userRepository.find();

    // ***** select *****
    //   let data = await userRepository.find({
    //     select:["email", "phone"]
    //   });


    // ***** where *****
    // let data = await userRepository.find({
    //     where:{name:"sumit", email:"s@g.com"}
    // })


    // ***** OR *****
    // let data = await userRepository.find({
    //     where:[
    //         {
    //             name:"sumit", email:"s@g.com"
    //         },
    //         {
    //             name:"amit"
    //         }
    //     ]
    // })


    // ***** Order *****
    // let data = await userRepository.find({
    //     order:{
    //         id:"DESC"
    //     }
    // })


    // ***** Order with skip, take *****
    // let data = await userRepository.find({
    //     order:{
    //         id:"DESC"
    //     },
    //     skip:1,
    //     take:1
    // })


    // ***** NOT *****
    //   let data = await userRepository.findBy({
    //     name: Not("sumit"),
    //   });


    // ***** LessThan, LessThanOrEqual, Equal *****
    // let data = await userRepository.findBy({
    //     id:LessThan(12)
    // })


    // ***** Like *****
    // let data = await userRepository.findBy({
    //     name:Like("%m%")
    // })


    // ***** Between *****
    // let data = await userRepository.findBy({
    //     id:Between(1,11)
    // })


    // ***** IsNull *****
    //   let data = await userRepository.findBy({
    //     phone:IsNull()
    //   })
    //   res.send(data);


};

// fetch by id
export const getUserById = async (req: any, res: any) => {
    let data = await userRepository.findOneBy({ id: 8 });
    res.send(data);
};

// truncate table
export const truncateTable = async (req: any, res: any) => {
    let data = await userRepository.clear();
    res.send("table truncated successfully");
};
