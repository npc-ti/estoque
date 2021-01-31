import { Request, Response } from 'express';
import { user, userLogin, userDocument, userRegister } from '../../db/users/user.types';
import userStatic from '../../db/users/user.static';

class authController {
    req: Request;
    res: Response;
    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }
    public async registerNewUser () {
        try{
            const body: user = this.req.body;
            const user= await userStatic.createNewUser(body);
            return this.res.send(user);
            
        }catch (err){
            console.log(err)
            this.res.send({err:'Algo deu errado'});
        }
    }
    public async loginUser (){
        try{
            const body: userRegister = this.req.body;
            const user= await userStatic.loginUser(body);
            return this.res.send(user);
        }
        catch(err){
            this.res.send({err:'Algo deu errado'});

        }

    }
}

export default (req:Request, res:Response) => new authController(req, res);