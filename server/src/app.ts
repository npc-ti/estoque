import express,{ Application, Request, Response } from 'express';
import { config } from 'dotenv';
import authRouters from './routes/authRouters';
import Database from './db';
import projectRouter from './routes/applicationRouters';

config();
const app: Application = express();
const Port = process.env.PORT || 3000 ;

async function application() {

    await Database.connection();

    app.use(express.json());
    app.use('/auth',authRouters);
    app.use('/project',projectRouter);
    
    app.listen(Port, async () => {
        console.log(`O servidor esta rodando na porta ${Port}`);
    });
} 

application()