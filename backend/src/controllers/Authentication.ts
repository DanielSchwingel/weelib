import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../database/entities/User';
import Mail from '../services/Mail';


export default {
   async authenticate(request: Request, response: Response) {
      const { email, password } = request.body;
      const repository = getRepository(User);
      const user = await repository.findOne({ email });

      console.log(user?.category);
      if (user?.category.id === 2) {
         return response.status(401).json({ message: 'Sem permissão de acesso'})
      }

      const match = await bcrypt.compare(password, String(user?.password));

      if (match) {
         const token = jwt.sign(
            {
               id: user?.id,
               name: user?.name
            }, 
            String(process.env.SECRET_KEY_API),
            {
               expiresIn: 86400
            });
         return response.status(200).json(
            {
               user: {
                  id: user?.id,
                  name: user?.name
               },
               token
            }
         )
      }

      return response.status(401).json({ message: 'Dados inválidos'})
   },

   async forgotPassword(request: Request, response: Response) {
      const { email } = request.body;
      const repository = getRepository(User);
      const user = await repository.findOne({ email });
      if (!user) {
         return response.status(404).json({ message: 'Usuário não entrado!' })
      }
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      const token = bcrypt.hashSync(user.name, 10);

      await repository.update(user.id, 
         {
            token_rp: token,
            expiration_rp: expiration
         }
      )

      try {
         Mail.sendMail({
            from: process.env.USER,
            to: email,
            subject: `Recuperação de senha: ${user.name}`,
            text: `Atualize sua senha através do seguinte link http://localhost:3000/reset-password?token=${token}`
         })         
         return response.status(200).json({ message: 'E-mail enviado com sucesso' });
      } catch (error) {
         return response.status(500).json({ message: `Não foi possível enviar o -email: ${error}` })
      }
   },

   async resetPassword(request: Request, response: Response) {
      const { token } = request.query;
      const { password } = request.body;
      const repository = getRepository(User);
      const user = await repository.findOne({ token_rp: String(token) });
      const now = new Date();
      if (user) {
         user.password = password;
         if (user.expiration_rp > now) {
            await repository.save(user);
            return response.status(200).json({message: 'Senha alterada com sucesso!'})
         } else { 
            return response.status(500).json({ message: 'Link expirou, solicite outro!' })
         }
      }
      return response.status(400).json({ message: 'Link incorreto!' })
   }
}