import { inject, injectable } from "tsyringe";
import { Element } from "../../../entities/Element";
import { IElementRepository } from "../../../repositories/IElementRepository";

@injectable()
class ListEstadoUseCase{

    constructor(
        @inject("ElementRepository")
        private listEstadoRepository : IElementRepository){ }

        async execute(estado:string):Promise<Element>{

            const list = await this.listEstadoRepository.findByEstado(estado)

            return list
        }
   
}
export{ListEstadoUseCase}