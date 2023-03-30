import { Router } from "express"

import { categoriesrouter } from "./categories.routes"

import { elementoRouter } from "./elemento.routes"


const router = Router()

router.use(categoriesrouter)
router.use(elementoRouter)

export {router}

