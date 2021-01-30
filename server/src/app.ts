import express,{ Application, Request, Response } from 'express';
import { config } from 'dotenv';

config();
const app: Application = express();
const Port = process.env.PORT || 3000 ;

app.use(express.json());

app.listen(Port, () => {
    console.log(`O servidor esta rodando na porta ${Port}`)
})