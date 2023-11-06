import express from 'express'
import router from "./routes/route";
import { AppDataSource } from './dataSource';

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("db connected");
  })
  .catch((error: any) => console.log(error));


// app.use("/", router);

app.listen(5000, (): void => console.log("server running on port 5000"));
