import { Request, Response, NextFunction } from "express";
import schema from './schema'

export default {
    async createUser (req: Request, res: Response, next: NextFunction) {
        try{
            await schema.createUser.parseAsync(req.body)
            next()
        }
        catch(error){
            next(error)
        }
    },
async loginUser (req: Request, res: Response, next: NextFunction) {
        try{
            await schema.loginUser.parseAsync(req.body)
            next()
        }
        catch(error){
            next(error)
        }
    }
}