import userSchema from './user.schema';
import { userDocument } from "./user.types";
import { model } from 'mongoose'

const userModel = model <userDocument> ('user', userSchema,'users');

export default userModel;