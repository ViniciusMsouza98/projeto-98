import { getRepository, Repository } from "typeorm";
import { Element } from "../entities/Element";
import { IElementRepository, IElementRepositoryDTO } from "./IElementRepository";

  class ElementRepository implements IElementRepository{

   private repository:Repository<Element>
   
   constructor(){
        this.repository= getRepository(Element)
    }

   

    async create({estado,cidade}:IElementRepositoryDTO):Promise<void>{
        const element = this.repository.create({
            cidade,
            estado
        })

        await this.repository.save(element)

    }
    async list(): Promise<Element[]>{
        const list = await this.repository.find();

        return list
    }

   async findByEstado(Estado:string):Promise<Element>{

        const buscaCidade = await this.repository.findOne(Estado)

        return buscaCidade
    }

    async findByCidade(Cidade:string):Promise<Element>{

        const buscarEstado = await this.repository.findOne(Cidade)

        return buscarEstado
    }
}

export {ElementRepository}