import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/user';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('DATABASE Online')
        } catch (e) {
            throw new Error(e);
            // console.log('ERROR: ', e);
        }
    }

    middlewares() {

        this.app.use( cors() ); // cors

        this.app.use( express.json() ); // body

        this.app.use( express.static('public') ); // public file
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port ' + this.port);
        })
    }
}

export default Server;
