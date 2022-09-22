import { Schema, Types, model} from 'mongoose'

export interface IUser {
    username: string, 
    email: string,
    password: string,
    about: string,
    type: UserType,
}

export enum UserType {	
    ADMIN = 'admin',
    USER = 'user'   
}

const schema = {
    user: new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: { type: String, required: false },
    type: { 
        type: String,
         required: true,
        //  enum: Object.values(UserType),
    },
},
{ timestamps: true }

)
}
export const User = model<IUser>('User', schema.user)