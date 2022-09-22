import { string, object} from 'zod';
import { parseUrl } from '../../common/utils';
// import 

export default {
    createUser: object({
        username: string({required_error: 'username is required'}),
        email: string({required_error: 'email is required'})
        .email({message: 'email is invalid'}),
        password: string({required_error: 'password is required'}),
        about: string({required_error: 'about is required'}).optional(),
        type: string({required_error: 'type is required'})
}),
loginUser: object({
    email: string({required_error: 'email is required'})
    .email({message: 'email is invalid'}),
    password: string({required_error: 'password is required'})
})
}