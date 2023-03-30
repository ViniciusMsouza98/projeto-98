import { User } from "../entities/User";
import { ICategoryRepository, ICreateCategoryDTO } from "./IcategoryRepository";


class PostgresCategoryRepository implements ICategoryRepository{

   async create({name, sexo, cidade}:ICreateCategoryDTO): Promise<void>{

        console.log({name, sexo, cidade});
    }

   async findByUsuario(name: string):Promise<User> {
        console.log(name);
        return null;
    }
   async findById(idParams: string[]):Promise<User[]>{
        console.log(idParams)
        return null
    
    }
async list(): Promise<User[]>{
        return null;
    }

}

export {PostgresCategoryRepository}