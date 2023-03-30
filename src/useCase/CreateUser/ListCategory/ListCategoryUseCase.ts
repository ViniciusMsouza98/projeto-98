import { inject, injectable } from "tsyringe";
import { User } from "../../../entities/User";
import { ICategoryRepository } from "../../../repositories/IcategoryRepository";

@injectable()
class ListCategoryUseCase{

    constructor(
      @inject("CategoriesRepository")
      private listCategoryRepository: ICategoryRepository){}

  async execute():Promise<User[]>{

        const usuarios = await this.listCategoryRepository.list();
        return  usuarios 

       }

}

export {ListCategoryUseCase}

