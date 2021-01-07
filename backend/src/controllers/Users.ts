import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../database/entities/User';

export default {
   async create(request: Request, response: Response) {
      const { name, email, password, category_id } = request.body;
      const data = {
         name,
         email,
         password,
         category: {
            id: category_id
         }
      }
      const repository = getRepository(User);
      const user = repository.create(data)
      await repository.save(user);
      return response.status(201).json(user);
   },

   async index(request: Request, response: Response) {
      const repository = getRepository(User);
      const users = await repository.find();
      return response.status(200).json(users);
   },

   async show(request: Request, response: Response) {
      const { id } = request.params;
      const repository = getRepository(User);
      const user = await repository.findOne(id);
      if (user) {
         return response.status(200).json(user);
      }
      return response.status(404).json({message: 'User not found'});
   },

   async delete(request: Request, response: Response) {
      const { id } = request.params;
      const repository = getRepository(User);
      const user = await repository.findOne(id);
      if (user) {
         await repository.delete(user);
         return response.status(200).json(user);
      }
      return response.status(404).json({message: 'User not found'})
   }
}