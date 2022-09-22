import {IUser, User} from '../../models/'
import {APIError, jwt} from '../../common';
import bcrypt from 'bcrypt';


export default {


    async createUser(user: IUser) {
        const {username, email, password, about, type} = user
        const duplicate = await User.findOne({$or: [{username}, {email}]})
        if(duplicate) throw new APIError({status:409, message:'user already exists', path:'email'})
        if (type!== 'admin' && type !== 'user') throw new APIError({status:400, message:'invalid user type', path:'type'})
        const hash = await bcrypt.hash(password, 10)
        const newUser = await User.create({username, email, about, type, password: hash})
        const token = await jwt.encode({id: newUser.email})
        return {token, user: newUser}
    },
        // const newUser = new User({username, email, password, about, type})
        // await newUser.save()
        // return newUser

        async loginUser(user: IUser) {
            const {email, password} = user
            const foundUser = await User.findOne({email})
            if(!foundUser) throw new APIError({status:404, message:'user not found', path:'email'})
            if(foundUser && !(await bcrypt.compare(password, foundUser.password))) throw new APIError({status:401, message:'incorrect password', path:'password'})
            // const isMatch = await foundUser.comparePassword(password)
            // if(!isMatch) throw new APIError({status:401, message:'invalid password', path:'password'})
            const token = await jwt.encode({id: foundUser.email})
            return {token, user: foundUser}
    }
}