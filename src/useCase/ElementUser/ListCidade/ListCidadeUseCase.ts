import { inject, injectable } from "tsyringe";
import { Element } from "../../../entities/Element";
import { IElementRepository } from "../../../repositories/IElementRepository";


@injectable()
class ListCidadeUseCase{
    constructor(
        @inject("ElementRepository")
        private listCidadeRepository: IElementRepository){ }

       async execute(cidade:string):Promise<Element>{

            const list = await this.listCidadeRepository.findByCidade(cidade)

            return list
        }
   
}

export {ListCidadeUseCase}