import { sign, verify } from 'jsonwebtoken';

interface reponseToken { 
    err?:any;
    decode?:string | any;
}

class jsonWebToken {
    private mysecret
    constructor(){
        this.mysecret = process.env.SECRET;
    }

    public genarator(id: string, remember?: boolean): string {
        const jwt = sign({id},`${this.mysecret}`,{
            expiresIn:remember ? 31540000 : 86400
        });

        return jwt
    }

    public verfyToken (token: string): reponseToken {
        const response:reponseToken = {};
        const id = verify(token, `${this.mysecret}`,
        (err,decode) => {
            response.err = err
            response.decode = decode
        });
        return response;
    }
}

export default new jsonWebToken