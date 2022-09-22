/**
 *
 * Required External Modules
 *
 */

 import { JWT_TTL } from '../config';
 import { verify, sign } from 'jsonwebtoken';
import { Types } from 'mongoose';
 
 /**
  *
  * Decoded Interface
  *
  */
 
 export interface IDecoded {
//    id: string | Types.ObjectId;
//    iat: number;
//    exp: number;
[key : string] : string
 }
 
 /**
  *
  * Export Utilities
  *
  */
 
 export const jwt = {
   /**
    *
    * encode a token
    *
    */
 
   async encode(params: { id: string| IDecoded }): Promise<string> {
     return new Promise((resolve, reject) => {
       sign(params, "addvd233v", { expiresIn: JWT_TTL }, (error, token) => {
         if (error) {
           reject(error);
         } else {
           resolve(token as string);
         }
       });
     });
   },
 
   /**
    *
    * decode a token
    *
    */
 
   async decode(params: { token: string }): Promise<IDecoded> {
     return new Promise((resolve, reject) => {
       const { token } = params;
       verify(token, "addvd233v", (error, decoded) => {
         if (error) {
           reject(error);
         } else {
           resolve(decoded as IDecoded);
         }
       });
     });
   },
 };
 