
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectionDB from './config/db.js'

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
connectionDB()
const port=process.env.PORT||5000

app.listen(port,()=>{

    console.log(`successfully running on localhost://${port}`);
    
})