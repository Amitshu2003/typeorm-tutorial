import { User } from "../models/User";
import { AppDataSource } from "../dataSource";

const manager = AppDataSource.manager;

// create user
export const createUser = async (req: any, res: any) => {
  let data = await manager.insert(User, {
    name: "amit",
    email: "x@g.com",
    phone: "12345678",
  });

  res.send("user created successfully");
};

// Update User
export const updateUser = async (req: any, res: any) => {
  let data = await manager.update(
    User,
    { id: 3 },
    {
      email: "aa@a.com",
    }
  );
  res.send(data);
};

// Delete user
export const deleteUser = async (req: any, res: any) => {
  let data = await manager.delete(User, { id: 4 });
  res.send(data);
};

// fetch all users
export const getUsers = async (req: any, res: any) => {
  let data = await manager.find(User);
  res.send(data);
};

// fetch by id
export const getUserById = async (req: any, res: any) => {
  let data = await manager.findOneBy(User, { id: 3 });
  res.send(data);
};

// truncate table
export const truncateTable = async (req:any, res:any)=>{
  let data = await manager.clear(User)
  res.send(data)
}
