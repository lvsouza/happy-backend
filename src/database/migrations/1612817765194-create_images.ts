import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { ETableNames } from "../ETableNames";

export class createImages1612817765194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: ETableNames.images,
            columns: [
                {
                    name: 'id',
                    unsigned: true,
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    name: 'image_orphanage',
                    columnNames: ['orphanage_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: ETableNames.orphanages,
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(ETableNames.images);
    }

}
