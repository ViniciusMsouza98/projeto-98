import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Create1679603339175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name:"category",
                columns:[
                    {
                    
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",

                    },
                    {   
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "creat_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                    },

                ],
            })
        );
    }

        public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("category")
        }

}

