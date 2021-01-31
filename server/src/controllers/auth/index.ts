import { Request, Response } from 'express';
import { User } from "./types";

export default class authController {
    req: Request;
    res: Response;
    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }
    public registerNewUser () {
        return this.res.send({sucess:'okay'});
    }
    private searchUserInDb (element: string){
    }
}