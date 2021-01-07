import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Rent from '../database/entities/Rent';

export default {
   async create(request: Request, response: Response) {
      const {
         book_id,
         user_id,
         start,
         finish
      } = request.body;
      const data = {
         book: {
            id: book_id,
         },
         user: {
            id: user_id
         },
         start,
         finish,
         rented: true
      };
      const repository = getRepository(Rent);
      const rent = repository.create(data);
      await repository.save(rent);
      return response.status(201).json(rent);
   },

   async index(request: Request, response: Response) {
      const repository = getRepository(Rent);
      const rents = await repository.find();
      return response.status(200).json(rents);
   },

   async show(request: Request, response: Response) {
      const { id } = request.params;
      const repository = getRepository(Rent);
      const rent = await repository.findOne(id);
      if (rent) {
         return response.status(200).json(rent);
      }
      return response.status(404).json({message: 'Rent not found'});
   },

   async update(request: Request, response: Response) {
      const { id } = request.params;
      const repository = getRepository(Rent);
      await repository.update(id, {
         rented: false
      });
      return response.status(200).json({message: 'Livro devolvido com sucesso!'})
   }
}