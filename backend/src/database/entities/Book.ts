import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export default class Book {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   title: string;

   @Column()
   author: string;

   @Column()
   publisher:  string;

   @Column()
   about: string;

   @Column()
   purchase: Date;
}