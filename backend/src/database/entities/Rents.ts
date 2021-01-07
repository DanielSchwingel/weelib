import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Book from './Book';
import User from './User';

@Entity('rents')
export default class Rent {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @OneToOne(type=> Book, {
      eager: true,
      cascade: true,
   })
   @JoinColumn({name: 'book_id'})
   book: Book;

   @OneToOne(type=> User, {
      eager: true,
      cascade: true,
   })
   @JoinColumn({name: 'user_id'})
   user: User

   @Column()
   start: Date;

   @Column()
   finish: Date;

   @Column()
   rented: boolean;
}