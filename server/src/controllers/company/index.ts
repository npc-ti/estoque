import { Request, Response } from 'express';

class Companys {

    private req: Request;
    private res: Response;

    constructor(req: Request, res: Response){
        this.req = req;
        this.res = res;
    }

    public listAllCompanys(){
        
    }
}