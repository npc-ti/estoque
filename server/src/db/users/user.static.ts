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

            if(userModel.find({email:user.email}))
                return {};

            user.password = bcrypt.hashSync(user.password, this.salt);
            const userCreate = await userModel.create(user);
            const userAfterSaved = await userCreate.save();
            return { user: userAfterSaved};

        } catch (err) {
            throw err;
        }
    }

    public async loginUser (credentials:  userLogin): Promise<userReponse>{
        try{
            const [user] = await userModel.find({email:credentials.email});

            if(!user)
                return {};

            if(!bcrypt.compareSync(credentials.password, user.password))
                return {};

            return {user};
        }
        catch(err) {
            throw err
        }
    }
}

export default new UserStatic