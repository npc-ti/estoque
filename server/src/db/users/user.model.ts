import userSchema from './user.schema';
import { userDocument } from "./user.types";
import db from '../'

const userModel = db.dataBase().model <userDocument> ('user', userSchema);

export default userModel;