import {Request , Response} from "express"
import { container } from "tsyringe";
import { ImportUseCase } from "./ImportUseCase";

class ImportController{
    async handle(request:Request , response: Response): Promise<Response>{

        const {file} = request;

        const importUsecase=container.resolve(ImportUseCase)

        importUsecase.execute(file);

        return response.json()
    }
}
export {ImportController}