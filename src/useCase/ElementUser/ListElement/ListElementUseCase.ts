
import { inject, injectable } from "tsyringe";
import { Repository } from "typeorm";
import { Element } from "../../../entities/Element";
import { IElementRepository } from "../../../repositories/IElementRepository";

@injectable()
class ListElementUseCase{
    constructor(
        @inject("ElementRepository")
        private listCategoryRepository: IElementRepository ){}

        async execute():Promise<Element[]>{

            const list = await this.listCategoryRepository.list()

            return list
        }
    
}

export {ListElementUseCase}

