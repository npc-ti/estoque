import  { config } from 'dotenv';
import { NextFunction, Response, Request } from 'express';
import { decode } from 'jsonwebtoken';
import json from '../logic/jwt';

config();

interface RequestJwt extends Request {
    userId: string;
}

function middleware (req: RequestJwt, res: Response, next: NextFunction) {
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
        
        req.userId = verifyToken.decode.id;

        return next();
}

export default middleware