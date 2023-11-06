import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  truncateTable,
  updateUser,
} from "../controllers/userControllerRepository";

import {
  createEmployee,
  createPeople,
  createQuestion,
} from "../controllers/relationshipController";
import {
  getEmployeeAndPhoto,
  getPersonAndProfile,
  getPhotoAndEmployee,
  getQuestionAndCategory,
} from "../controllers/joinsController";
import { getDataUsingQueryBuilder } from "../controllers/queryBuilder";

// import {
//   createUser,
//   deleteUser,
//   getUserById,
//   getUsers,
//   truncateTable,
//   updateUser,
// } from "../controllers/userControllerEntityManager";

const router = express.Router();

router.get("/all", getUsers);
router.get("/user", getUserById);
router.post("/create", createUser);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);
router.delete("/empty", truncateTable);

router.post("/people", createPeople);
router.post("/employee", createEmployee);

router.post("/question", createQuestion);

router.get("/one2one", getPersonAndProfile);
router.get("/one2many", getEmployeeAndPhoto);
router.get("/many2one", getPhotoAndEmployee);
router.get("/many2many", getQuestionAndCategory)

router.get("/qbuilder", getDataUsingQueryBuilder)
export default router;
