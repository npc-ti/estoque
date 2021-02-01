import { Request, Response } from 'express';
import companyStatic from '../../db/companys/company.static';
import { company } from '../../db/companys/company.types';
import jwt from '../../middlewares/jwt';

class Company {

    private req: Request;
    private res: Response;
    private companyIds: string[];

    constructor(req: Request, res: Response){
        this.req = req;
        this.res = res;
        this.companyIds = jwt.companysId;
    }

    public async getCompany(){
        try{ 
            const companys = this.companyIds.map(async (company)=>
            await companyStatic.getCompany(company));

            return this.res.status(200).send({companys});
         }
         catch(err){
             return this.res.status(400).send({err});
         }
    }

    public async registerCompany(){
        try{
            const body: company = this.req.body;
            const company = companyStatic.registerCompany(body);
            return this.res.status(200).send({company});
        }
        catch(err){
            return this.res.status(400).send({err});
        }
    }
}

export default (req: Request, res: Response) => new Company(req,res);