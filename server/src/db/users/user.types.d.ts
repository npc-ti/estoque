import { Document, Model } from "mongoose";

export interface user {
    firstName: string,
    lastName: string,
    _id?: string,
    email: string,
    docNumber:string,
    password: string,
    companysIds: string[]
}

export interface userRegister {
    firstName: string,
    lastName: string,
    _id: string,
    email: string,
    docNumber:string,
    password: string,
}

export interface userLogin {
    email: string,
    password: string,
}

export interface userRepsonseToClient{
    firstName: string,
    lastName: string,
    _id: string,
    email: string,
    docNumber:string,
    jwt: stirng
}

export interface userReponse {
    user?:userRepsonseToClient,
    err?:string
}

export interface userDocument extends Document, user {}
export interface IUserModel extends Model<IUserDocument> {}
