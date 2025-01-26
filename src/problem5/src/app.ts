import express from 'express'
import { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import { initPostgresql } from './databases/postgresql'
import indexRoute from './routes'

const app = express()

// init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// init databases
initPostgresql()

// init routes
app.use('/api/v1', indexRoute)

// handle errors
app.use((req, res, next) => {
    const error = new Error('Not found') as any
    error.status = 404
    next(error)
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.status || 500

    res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error',
    })
})

export default app