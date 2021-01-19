import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcrypt';
import UserCategory from './UserCategory';

@Entity('users')
export default class User {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   name: string;

   @Column()
   email: string;

   @Column()
   password: string;

   @Column()
   expiration_rp: Date;

   @Column()
   token_rp: string;

   @OneToOne(type=> UserCategory, { 
      cascade: true, 
      eager: true 
   }) 
   @JoinColumn({name: 'category_id'})
   category: UserCategory;

   @BeforeInsert()
   @BeforeUpdate()
   hashPassword(){
      this.password = bcrypt.hashSync(this.password, 10);
   }

}