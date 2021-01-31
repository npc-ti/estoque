import  { config } from 'dotenv';
import { NextFunction, Response, Request } from 'express';
import { sign, verify } from 'jsonwebtoken';

config();

class jsonWebToken {
    private mysecret
    constructor(){
        this.mysecret = process.env.SECRET;
    }

    public genarator(id: string, remember?: boolean): string {
        const jwt = sign(id,`${this.mysecret}`,{
            expiresIn:remember ? 31540000 : 86400
        });
        return jwt
    }

    public verfyToken (token: string) {
        const id = verify(token, `${this.mysecret}`);
        return id;
    }
}

function middleware (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).send({err:"not token provide"});
        
        const parts = authHeader.split(' ');

        if(parts.length != 2)
            return res.status(401).send({err:"Token mal formado arruma sa merda direito pedro"});
        
        
    
    next();

}