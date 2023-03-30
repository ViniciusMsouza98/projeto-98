import { Request, Response } from "express";
import { container } from "tsyringe";
import { In } from "typeorm/find-options/operator/In";
import { IdConsultUseCase } from "./IdConsultUseCase";

class IdConsultController{
   async handle(request:Request , response: Response):Promise<Response>{

        const {id}=request.params;

        const idConsultUseCase = container.resolve(IdConsultUseCase)

        const consult = await idConsultUseCase.execute(null)

        return response.send(consult)
    }
}

export{IdConsultController}