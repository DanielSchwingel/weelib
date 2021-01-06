import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users_category')
export default class UserCategory {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   description: string;
}