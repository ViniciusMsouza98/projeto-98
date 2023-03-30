import { inject , injectable} from "tsyringe";
import { User } from "../../../entities/User";
import { ICategoryRepository } from "../../../repositories/IcategoryRepository";

@injectable()
class IdConsultUseCase{
      constructor(
        @inject("CategoriesRepository")
        private idCategoryRepository: ICategoryRepository){}

   async execute(idParams:String[]):Promise<User[]>{
        const consultId =  await this.idCategoryRepository.findById(null);

        return consultId;   
    }

}

export {IdConsultUseCase}