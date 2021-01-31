
import { Schema, Types } from 'mongoose';
import uuid from 'uuid';

export const userShema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    id: {
        type:String,
        default: () => uuid.v4(),
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