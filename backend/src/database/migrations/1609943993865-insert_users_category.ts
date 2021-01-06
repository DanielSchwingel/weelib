import {MigrationInterface, QueryRunner} from "typeorm";

export class insertUsersCategory1609943993865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
                .manager
                .createQueryBuilder()
                .insert()
                .into('users_category')
                .values([
            {
                id: 1,
                description: 'Administrador'
            },
            {
                id: 2,
                description: 'Usuário'
            }
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable('users_category');
    }

}
