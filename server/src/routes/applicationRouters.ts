import {Response, Request, Router} from 'express';
import middleware from '../middlewares/jwt';

const projectRouter = Router();

projectRouter.use(middleware.auth);

projectRouter.get('/listAllCompanys',(req: Request, res: Response) => null);
projectRouter.get('/listAllCompanys',(req: Request, res: Response) => null);
projectRouter.get('/listAllCompanys',(req: Request, res: Response) => null);
projectRouter.get('/listAllCompanys',(req: Request, res: Response) => null);

export default projectRouter;