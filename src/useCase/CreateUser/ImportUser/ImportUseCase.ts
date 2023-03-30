import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { injectable, inject } from "tsyringe";
import { ICategoryRepository } from "../../../repositories/IcategoryRepository";

interface IImportUsuarios{
    name:string;
    sexo: string;
    cidade:string;
}

@injectable()

class ImportUseCase {
    constructor(
        @inject("CategoriesRepository")
        private importRepository: ICategoryRepository){}

    loadCategory(file: Express.Multer.File):Promise<IImportUsuarios[]> {

        return new Promise((resolve , reject )=>{

            const stream = fs.createReadStream(file.path)

            const usuarios: IImportUsuarios[]=[]
        
            const parseFile = csvParse()
            
            stream.pipe(parseFile);
        
            parseFile.on("data", async (line) => {
        
                const [name, sexo, cidade]= line;
                usuarios.push({
                    name,
                    sexo,
                    cidade,
                })       
            })
           .on("end", ()=>{
            resolve(usuarios);
           })
           .on("error", (err)=>{
            reject(err);
           })
        })
        
   
    }

   async execute(file: Express.Multer.File):Promise<void>{

    const usuarios = await this.loadCategory(file)
   
    usuarios.map(async (usuario)=>{
        const {name, sexo, cidade}= usuario

        const importAleryExist = this.importRepository.findByUsuario(name)

        if(!importAleryExist) {
            this.importRepository.create({
                name,
                sexo,
                cidade
            })
        }
    })

}
}

export {ImportUseCase}


