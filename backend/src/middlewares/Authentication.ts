import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import iUserAuthData from '../interfaces/User';

export default {
   verifyJWT(request: Request, response: Response, next: NextFunction) {
      const { authorization } = request.headers;
      if (!authorization) {
         return response.status(401).json({ message: 'Token não informado' });
      }
      const token = authorization.replace('Bearer', '').trim();
      
      try {
         const data = jwt.verify(token, String(process.env.SECRET_KEY_API))
         const { id, name } = data as iUserAuthData;
         request.userId = id;
         request.userName = name;
         next();
      } catch {
         return response.status(401).json({ message: 'Token não confere' });
      }
   }
}