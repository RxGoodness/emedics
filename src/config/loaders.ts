/**
 *
 * Required External Modules
 *
 */

 import { db_url } from './env';
 import { connect } from 'mongoose';
//  import * as redis from 'redis';
 
 /**
  *
  * Export loaders
  *
  */
 
 
 export async function connectDatabases() {
   try {
     await connectMongo();
     console.log('MongoDB connected!');
 
    //  await connectRedis();
    //  console.log('Redis connected!');
   } catch (error: any) {
     console.log(`An error has occured with one of the DBs: ${error.message}`);
   }
 }
 
 async function connectMongo() {
   await connect('mongodb+srv://emedics:emedics@cluster0.eztorra.mongodb.net/test');
 }
