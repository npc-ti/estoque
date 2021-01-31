import userModel from './user.model'
import { user, userLogin, userReponse, userRepsonseToClient } from "./user.types";
import bcrypt from 'bcryptjs';
import jsonWebToken from '../../logic/jwt'

class UserStatic {
    private salt: string;
    constructor () {
        this.salt = bcrypt.genSaltSync(10);
    }

    public async createNewUser(user: user):Promise<userReponse> {
        try {
            const { email,docNumber } = user
            console.log(email)

            if(await userModel.findOne({email}))
                return {err:'O email já esta cadastrado'};

            if(await userModel.findOne({docNumber}))
                return {err:'O documento já está cadastrado'};

            user.password = bcrypt.hashSync(user.password, this.salt);

            const userCreate = await userModel.create(user);
            const userResponse: userRepsonseToClient = {
                _id: userCreate._id,
                docNumber: userCreate.docNumber,
                email: userCreate.email,
                firstName: userCreate.firstName,
                lastName: userCreate.lastName,
                jwt: jsonWebToken.genarator(userCreate._id),
            }
            return { user: userResponse};

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
            
                const userResponse: userRepsonseToClient = {
                    _id: user._id,
                    docNumber: user.docNumber,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    jwt: jsonWebToken.genarator(user._id),
                }
                return {user:userResponse};
            }
            catch(err) {
            throw err;
        }
        
    }
}

export default new UserStatic