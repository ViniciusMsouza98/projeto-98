import { In } from "typeorm";
import { getRepository, Repository } from "typeorm";
import  {User}  from "../../entities/User";
import { ICategoryRepository, ICreateCategoryDTO } from "../IcategoryRepository";


class CategoriesRepository implements ICategoryRepository{
   
    private repository:Repository<User>;

   constructor(){
     this.repository=getRepository(User)
   }

 async create({ name, sexo,  cidade}: ICreateCategoryDTO): Promise<void> {
   const category = this.repository.create({
    name,
    sexo,
    cidade

   })
    await this.repository.save(category)
}

async list():Promise<User[]> {
        const lista = await this.repository.find()
        return lista
   
}
async findByUsuario(name:string): Promise<User>{
    
    //select * from usuarios where name = "name limit 1"

    const usuario = await this.repository.findOne({name});

    return usuario

};

async findById(idParams:string[]):Promise<User[]>{

    const usersFiltrados = await this.repository.find({ id: In(idParams)})
   return usersFiltrados
}

}

export {  CategoriesRepository }
