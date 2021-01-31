import {Router, Response, Request } from 'express';
import authController from '../controllers/auth';

const authRouters = Router();

authRouters.post('/registeruser',(req: Request, res: Response) => authController(req,res).registerNewUser());
authRouters.post('/loginUser',(req: Request, res: Response) => authController(req,res).loginUser());
authRouters.post('/changePassword',(req: Request, res: Response) => null);

export default authRouters;