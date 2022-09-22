import { Request, Response, NextFunction } from "express";
import { APIresponse } from "../../common/utils";
import service from "./service";

export default {
    async register (req: Request, res: Response, next: NextFunction) {
        try{
            const data = await service.createUser(req.body)
            // const data = 
            APIresponse(res, 201, 'user created', data)
        }
        catch(error){
            next(error)
        }
    },
    async login (req: Request, res: Response, next: NextFunction) {
        try{
            const data = await service.loginUser(req.body)
            APIresponse(res, 200, 'user logged in', data)
        }
        catch(error){
            next(error)
        }
    }
}