import  { config } from 'dotenv';
import { NextFunction, Response, Request } from 'express';
import { decode } from 'jsonwebtoken';
import { convertTypeAcquisitionFromJson } from 'typescript';
import userStatic from '../db/users/user.static';
import json from '../logic/jwt';

config();

class middleware {

    userId: string;
    companysId: string[];

    constructor() {
        this.userId = '';
        this.companysId = []
    }

    public async auth (req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).send({err:"not token provide"});
        
        const parts = authHeader.split(' ');

        if(parts.length != 2)
            return res.status(401).send({err:"Token mal formado arruma sa merda direito pedro"});

        const [schema, token] = parts;

        if(!/^Bearer$/i.test(schema))
            return res.status(401).send({err:"Acho que o token esta mal formado"});
        
        const verifyToken = json.verfyToken(token);

        if(verifyToken.err)
            return res.status(401).send({err:"Token invalido"});
        
        this.userId = verifyToken.decode.id;
        this.companysId = (await userStatic.getUser(this.userId)).companysIds;

        return next();
    }
}

export default new middleware