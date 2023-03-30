import { User } from "../../../entities/User";
import { CategoriesRepository } from "../../../repositories/implementatios/CategoryRepository";
import { ICategoryRepository } from "../../../repositories/IcategoryRepository";
import { inject, autoInjectable, injectable } from "tsyringe";
interface IRequest{
    
    name:string;
    sexo:string;
    cidade:string;
}
@injectable()
class CreateCategoryUseCase{

    
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoryRepository){}

    async execute({name,sexo,cidade}:IRequest):Promise<void> {
        const categoryAleryExists = await this.categoriesRepository.findByUsuario(name);

    if(categoryAleryExists){
        throw new Error("Category Alery Exists")
    }
  this.categoriesRepository.create({name,sexo,cidade});

    }
}


export{CreateCategoryUseCase}