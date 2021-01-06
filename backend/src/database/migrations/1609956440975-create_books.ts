import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBooks1609956440975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'author',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'publisher',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'about',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'purchase',
                    type: 'timestamp',
                    isNullable: false,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
