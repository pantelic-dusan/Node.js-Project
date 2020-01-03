import * as Express from 'express'
import { Application } from 'express'

export class App {

    public app: Application
    public port: number

    constructor(appInit: {port: number; controllers: any; middlewares: any;}) {
        this.app = Express()
        // Enables CORS
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            next();
        });
        this.port = appInit.port
        this.middlewares(appInit.middlewares)
        this.routes(appInit.controllers)
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log( '--------------------------------' )
            console.log(`App listening on the http://localhost:${this.port}`)
            console.log( '--------------------------------' )            
            
        })
    }

    private routes(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router)
        })
    }
    
    private middlewares(middlewares: any) {
        middlewares.forEach((middleware: any) => {
            this.app.use(middleware)
        })
    }
}