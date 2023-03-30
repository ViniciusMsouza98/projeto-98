import {Request, Response} from "express"
import { container } from "tsyringe"
import { ListEstadoUseCase } from "./ListaEstadoUseCase"



class ListEstadoController{

   async handle(request: Request, response: Response):Promise<Response>{

        const {Estado}=request.body

        const listEstadoUseCase = container.resolve(ListEstadoUseCase)

        await listEstadoUseCase.execute(Estado)

        return response.json()
    }
}
export {ListEstadoController}