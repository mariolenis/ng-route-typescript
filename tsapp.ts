/// <reference path="typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

class Server
{
    app: express.Application;
    constructor()
    {
        this.app = express();
        this.app.use(logger('dev'))
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));        
    }
}

let appObj = new Server();
export = appObj.app;