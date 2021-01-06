import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1609952898382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'expiration_rp',
                    type: 'timestamp'
                },
                {
                    name: 'token_rp',
                    type: 'varchar'
                },
                {
                    name: 'category_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'UserCategory',
                    columnNames: ['category_id'],
                    referencedTableName: 'users_category',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
