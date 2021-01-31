
import { Schema, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const userShema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    _id: {
        type:String,
        default: () => uuidv4(),
    },
    email: {
        type: String,
        unique: true,
    },
    docNumber: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    companysIds: {
        type: Array
    }

})

export default userShema