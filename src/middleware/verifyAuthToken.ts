import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(' ')[1];
    
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  }catch(err){
    res.status(401);
    res.json('Acess denied, invalid token');
  }
}
export default verifyAuthToken;