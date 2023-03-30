import { Router } from "express";

import { CreateCategoryController } from "../useCase/CreateUser/CreateCategory/createCategoryController";

import { ImportController } from "../useCase/CreateUser/ImportUser/ImportController";

import { IdConsultController } from "../useCase/CreateUser/IdCategory/IdConsultController";

import multer from "multer";
import { ListCategoryController } from "../useCase/CreateUser/ListCategory/ListCategoryController";

const categoriesrouter = Router();

const upload = multer({
    dest:"./tmp",
});

const createCategoryController= new CreateCategoryController()
const listCategoryController= new ListCategoryController()
const importController= new ImportController()
const idConsultController= new IdConsultController()

categoriesrouter.post("/users", createCategoryController.handle);

categoriesrouter.get("/users", idConsultController.handle);

categoriesrouter.post("/import", upload.single("file"), importController.handle);

categoriesrouter.get("/users", listCategoryController.handle);

export  { categoriesrouter };
