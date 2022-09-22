/**
 *
 * Required External Modules
 *
 */

 import { Response, Request, NextFunction } from 'express';
 import { APIError } from './errors';
 import { IDecoded, jwt } from './jwt';
//  import { Event_Mode, Event_Type, CurrencyType } from '../models';
//  import axios, { AxiosError } from 'axios';
 
 /**
  *
  * APIresponse
  *
  */
 
 export function APIresponse(
   res: Response,
   status: number,
   message: string,
   data: any
 ) {
   res.status(status).send({
     status: 'success',
     message,
     data: Array.isArray(data) ? data : [data],
   });
 }
 
 /**
  *
  * parse url strings
  *
  */
 
 export function parseUrl(val: string) {
   if (!val) return false;
 
   try {
     new URL(val);
     return true;
   } catch (error) {
     return false;
   }
 }
 
 /**
  *
  * verify acessToken
  *
  */
 
 export async function verifyAcessToken(
   req: Request,
   res: Response,
   next: NextFunction
 ): Promise<any> {
   try {

//      const authHeader:any = req.headers['authorization'];
//      const bearerToken = handleAuthHeader(authHeader);
 
//      const token = bearerToken.split(' ')[1];
//      const decoded: IDecoded = await jwt.decode({ token });
 
//      req.decoded = { id: decoded.id };
//      next();
   } catch (error) {
     next(error);
//    }
   }
 }
 
 function handleAuthHeader(authHeader: string | undefined) {
   if (!authHeader) {
     throw new APIError({
       status: 401,
       message: 'No authorization header set',
     });
   }
 
   return authHeader;
 }
 
