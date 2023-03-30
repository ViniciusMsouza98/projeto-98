import {Request, Response} from "express"
import { container } from "tsyringe"
import { ListCidadeUseCase } from "./ListCidadeUseCase";

class ListCidadeController{


    async handle(request:Request, response:Response):Promise<Response>{

        const {cidade}=request.body;

        const listCidadeUseCase = container.resolve(ListCidadeUseCase)

         await listCidadeUseCase.execute(cidade)

        return response.json()
    }
}

export {ListCidadeController}