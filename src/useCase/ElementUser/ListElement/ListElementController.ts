import{Request, Response} from "express"
import { container } from "tsyringe"
import { ListElementUseCase } from "./ListElementUseCase"


class ListElementController{

   async  handle(request: Request , response: Response){

        const listElementController = container.resolve(ListElementUseCase)

        const list = await listElementController.execute()

        return list
    }
}

export {ListElementController}