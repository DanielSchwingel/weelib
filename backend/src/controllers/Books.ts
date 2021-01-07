import { Request, Response } from 'express';
import { getRepository, UpdateDateColumn } from 'typeorm';
import Book from '../database/entities/Book';

export default {
   async create(request: Request, response: Response) {
      const repository = getRepository(Book);
      const book = repository.create(request.body);
      await repository.save(book);
      return response.status(201).json(book);
   },

   async index(request: Request, response: Response) {
      const repository = getRepository(Book);
      const books = await repository.find();
      return response.status(200).json(books);
   },

   async show(request: Request, response: Response) {
      const { id } = request.params;
      const repository = getRepository(Book);
      const book = await repository.findOne(id);
      if (book) {
         return response.status(200).json(book);
      };
      return response.status(404).json({message: 'Book not found'});
   },

   async update(request: Request, response: Response) {
      const { id } = request.params;
      const data = {
         id: Number(id),
         ...request.body
      }
      const repository = getRepository(Book);
      const book = await repository.preload(data);
      if (book) {
         await repository.save(book);
         return response.status(200).json(book)
      }
      return response.status(404).json({message: 'Book not found'})
   },

   async delete(request: Request, response: Response) {
      const { id } = request.params;
      const repository = getRepository(Book);
      const book = await repository.findOne(id);
      if (book) {
         await repository.remove(book);
         return response.status(200).json(book);
      };
      return response.status(404).json({message: 'Book not found'});
   }
}