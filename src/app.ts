import * as Express from 'express'
import { Application } from 'express'

export class App {

    public app: Application
    public port: number

    constructor(appInit: {port: number; controllers: any; middlewares: any;}) {
        this.app = Express()
        this.port = appInit.port
        this.routes(appInit.controllers)
        this.middlewares(appInit.middlewares)
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log( '--------------------------------' )
            console.log(`App listening on the http://localhost:${this.port}`)
            console.log( '--------------------------------' )            
            
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }
    
    private middlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    }
}