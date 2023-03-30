import { User } from "../entities/User";

interface ICreateCategoryDTO{

    id?:string,
    name:string,
    sexo:string,
    cidade:string
}

interface ICategoryRepository{
    list(): Promise<User[]>;
    findByUsuario(name:string):Promise<User>;
    findById(idParams:string[]):Promise<User[]>;
    create({name,sexo,cidade}:ICreateCategoryDTO):Promise<void>;
    
    


}

export{ICategoryRepository, ICreateCategoryDTO}