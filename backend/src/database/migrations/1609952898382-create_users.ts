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
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'expiration_rp',
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: 'token_rp',
                    type: 'varchar',
                    isNullable: true,
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
