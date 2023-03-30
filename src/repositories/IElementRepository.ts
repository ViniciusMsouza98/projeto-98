import { Element } from "../entities/Element";

interface IElementRepositoryDTO{

    estado:string;
    cidade:string;
}

interface IElementRepository{
    create({estado, cidade}:IElementRepositoryDTO):Promise<void>;
    list():Promise<Element[]>;
    findByCidade(cidade:string):Promise<Element>;
    findByEstado(estado:string):Promise<Element>;
   
}

export {IElementRepository, IElementRepositoryDTO}