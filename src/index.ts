import express from 'express';	
import morgan from 'morgan';
import cors from 'cors';
import {servicesRouter} from './services';
import  {connectDatabases, } from './config';
import { _404ErrorHandler, expressErrorHandler } from './common';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

connectDatabases();

app.use('/api', servicesRouter);

app.use(_404ErrorHandler);
app.use(expressErrorHandler);

try {
    app.listen(5500, () => {
        console.log(`Server listening on port 5500`);
    });
}
catch (error: any) {
    console.log(`An error has occured: ${error.message}`);
}
