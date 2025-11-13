
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoutes from './routes/AuthRoutes.js'
import ConnectDB from './config/db.js'
dotenv.config()
ConnectDB()
const app= express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",AuthRoutes)
const port = process.env.PORT||5000

app.listen(port,()=>{

    console.log(`Successfully running on http://localhost:${port}`);
    
})

//http://localhost:3000/api/auth