import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import dotenv from "dotenv"
import helmet from 'helmet'
import morgan from 'morgan'

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

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Connected to DB Vision");
        app.listen(
          process.env.PORT || 5000,
          console.log(`Server is running on port ${process.env.PORT || 5000}`)
        );
      })
      .catch((err) => console.log('Error connect to DB ', err))