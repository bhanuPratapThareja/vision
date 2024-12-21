import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import dotenv from "dotenv"
import helmet from 'helmet'
import morgan from 'morgan'

import generalRouter from './routes/general.route.js'
import clientRouter from './routes/client.route.js'

// import { dataTransaction } from './data/index.js'

dotenv.config()
const app = express()
const __dirname = path.resolve()

app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'client', 'dist')))


app.use('/api/general', generalRouter)
app.use('/api/client', clientRouter)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'An unknown error occured!'
  return res.status(status).json({ message })
})

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Connected to DB Vision");
        app.listen(
          process.env.PORT || 5000,
          console.log(`Server is running on port ${process.env.PORT || 5000}`),
        );

      })
      .catch((err) => console.log('Error connect to DB ', err))