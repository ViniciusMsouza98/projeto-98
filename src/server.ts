import express from "express";
import { router } from "./rotas";

import "./database"

import "./shared/container"

const app = express()

app.use(express.json());

app.use(router)


app.listen(80, () => console.log("Server is runnig!")); 