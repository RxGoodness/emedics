/**
 *
 * Required External Modules
 *
 */

 import dotenv from 'dotenv';

 /**
  *
  * Initialize dotenv
  *
  */
 
 dotenv.config();
 
 /**
  *
  * Serialize and export env variables
  *
  */
 
//  const env = <string>process.env.ENV;
 
//  export const port = +(<string>( 
    // "5000" || (env === 'prod' ? process.env.PORT : process.env.DEV_PORT)
//  ));
 
 export const db_url = <string>(
    process.env.MONGO_URI
//    (env === 'prod' ? process.env.DB : process.env.DEV_DB)
 );
 
//  export const redis_url = <string>(
//    (env === 'prod' ? process.env.REDIS_URL : process.env.DEV_REDIS)
//  );
 
//  export const morgan_mode = env === 'prod' ? 'combined' : 'dev';
 
//  export const jwt_secret = <string>process.env.JWT_SECRET;
