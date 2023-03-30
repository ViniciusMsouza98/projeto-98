import {Request, Response}  from "express"
import { ElementUseCase } from "./ElementUseCase";
import { container } from "tsyringe";


class ElementController{
    async handle(request:Request , response: Response):Promise<Response>{

    const {estado,cidade}= request.body;

    const elementUseCase=container.resolve(ElementUseCase)

    elementUseCase.execute({estado,cidade});

    return response.status(201).send()
 }
}

export{ElementController}