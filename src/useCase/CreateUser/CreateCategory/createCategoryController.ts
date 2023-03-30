import { Response, Request} from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategoryController{  

    async handle(request: Request, response: Response): Promise<Response> {

      const {name,sexo, cidade } = request.body;

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

      await createCategoryUseCase.execute({name,sexo,cidade})
       
    return response.status(201).json();

    }
}

export{CreateCategoryController}