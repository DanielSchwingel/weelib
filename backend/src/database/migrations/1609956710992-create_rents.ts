import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRents1609956710992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'rents',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'book_id',
                    type: 'integer',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                },
                {
                    name: 'start',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: false,
                },
                {
                    name: 'finish',
                    type: 'timestamp',
                    isNullable: false,
                },
                {
                    name: 'rented',
                    type: 'boolean',
                    default: 'false'
                }
            ],
            foreignKeys: [
                {
                    name: 'BookRented',
                    columnNames: ['book_id'],
                    referencedTableName: 'books',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'         
                },
                {
                    name: 'UserRented',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'   
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rents')
    }

}
