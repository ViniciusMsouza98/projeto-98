import { inject, injectable } from "tsyringe";
import { ElementRepository } from "../../../repositories/ElementRepository"
import { IElementRepository } from "../../../repositories/IElementRepository";

interface IRequest{
    estado:string;
    cidade:string;
}
@injectable()
class ElementUseCase{
    
constructor(
    @inject("ElementRepository")
    private elementRepository: IElementRepository ){}
   async execute({estado, cidade}:IRequest):Promise<void>{
    
    this.elementRepository.create({estado,cidade})
}
}

export { ElementUseCase}