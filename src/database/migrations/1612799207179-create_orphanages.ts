import { MigrationInterface, QueryRunner, Table } from "typeorm";

import { ETableNames } from "../ETableNames";

export class createOrphanages1612799207179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: ETableNames.orphanages,
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
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'logitude',
                    type: 'decimal',
                    precision: 2,
                    scale: 10,
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    precision: 2,
                    scale: 10,
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(ETableNames.orphanages);
    }

}
