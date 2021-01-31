import userModel from './user.model'
import { user, userLogin, userReponse } from "./user.types";
import bcrypt from 'bcryptjs';

class UserStatic {
    private salt: string;
    constructor () {
        this.salt = bcrypt.genSaltSync(10);
    }

    public async createNewUser(user: user):Promise<userReponse> {
        try {
            const { email } = user
            console.log(email)
            if(await userModel.findOne({email}))
                return {err:'O email já esta cadastrado'};

            user.password = bcrypt.hashSync(user.password, this.salt);
            const userCreate = await userModel.create(user);
            return { user: userCreate};

        } catch (err) {
            throw err;
        }
    }

    public async loginUser (credentials:  userLogin): Promise<userReponse>{
        try{
            const user = await userModel.findOne({email:credentials.email});

            if(!user)
            return {err:'O email não existe'};


            if(!bcrypt.compareSync(credentials.password, user.password))
                return {err:'Senha incorreta'};

            return {user};
        }
        catch(err) {
            throw err
        }
    }
}

export default new UserStatic