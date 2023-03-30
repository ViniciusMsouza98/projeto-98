
import { v4 as uuidV4} from "uuid";

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
@Entity("category")
class User{
   @PrimaryColumn()
    id?:string;

    @Column()
    name:string;

    @Column()
    sexo:string;
    
    @Column()
    cidade:string;

    @CreateDateColumn()
    created_at: Date;
    
//O constructor serve para instanciar uma class
    constructor(){
        //tradução: se não tiver o id > o não é descrito pelo ponto de esclamação<
        if(!this.id){
            this.id=uuidV4();
        }
    }
}
export { User }