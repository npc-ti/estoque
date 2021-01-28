import express,{ Application, Request, Response } from 'express';

const app: Application = express();
const Port = 3333 || process.env.PORT;

app.use(express.json())

app.get('/',(req: Request, res: Response) => {
    res.send({hello:'world'})
})

app.listen(Port, () => {
    console.clear();
    console.log(`O servidor esta rodando na porta ${Port}`)
})