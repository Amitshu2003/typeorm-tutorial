import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "8989",
  database: "demo",
  synchronize: true,
  logging: true,
  entities: ["./models/*.ts", "./ent-rel/*.ts"],
  migrations:["./migration/*.ts"]
});
