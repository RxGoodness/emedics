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
 
//  export function parseEventMode(val: string) {
//    if (!val) return false;
 
//    if (val === Event_Mode.inPerson || val === Event_Mode.virtual) return true;
 
//    return false;
//  }
 
//  export function parseCurrencyType(val: string) {
//    if (!val) return false;
 
//    if (val === CurrencyType.ngn || val === CurrencyType.usd) return true;
 
//    return false;
//  }
 
//  export function parseEventType(val: string) {
//    if (!val) return false;
 
//    if (
//      val === Event_Type.free ||
//      val === Event_Type.paid ||
//      val === Event_Type.fundRaiserFlex ||
//      val === Event_Type.fundRaiserFixed
//    )
//      return true;
 
//    return false;
//  }
 
//  export function parseDate(val: string) {
//    if (!val) return false;
 
//    try {
//      new Date(val).toISOString();
//      return true;
//    } catch (error) {
//      return false;
//    }
//  }
 
//  export function parseEventName(val: string) {
//    if (!val) return false;
//    return /^[a-z][a-z0-9]+$/.test(val);
//  }
 