import {Response, Request, Router} from 'express';
import middleware from '../middlewares/jwt';
import Company from '../controllers/company'

const projectRouter = Router();

projectRouter.use(middleware.auth);

projectRouter.get('/',(req: Request, res: Response) =>res.send({logged:true}));
projectRouter.get('/listAllCompanys',(req: Request, res: Response) => Company(req,res).getCompany());
projectRouter.get('/registerCompany',(req: Request, res: Response) => Company(req,res).registerCompany());
projectRouter.get('/listAllCompanys',(req: Request, res: Response) => null);
projectRouter.get('/listAllCompanys',(req: Request, res: Response) => null);

export default projectRouter;