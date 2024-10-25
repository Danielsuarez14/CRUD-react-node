import express from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import booksRoutes from './routes/routes.js'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(cors())
app.use(express.json())
app.use(booksRoutes)
app.use(express.static(join(__dirname, '../client/dist')))
app.listen(PORT, ()=>{
    console.log(`Server running in the port: ${PORT}`)
})