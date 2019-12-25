import { App } from './app'
import * as BodyParser from 'body-parser'

import { ScoreController } from './controllers/score.controller'

const app = new App ({
    port: 8000,
    controllers: [
        new ScoreController()
    ],
    middlewares: [
        BodyParser.json(),
        BodyParser.urlencoded({extended: true})
    ]

})

app.start();