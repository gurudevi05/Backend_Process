
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import PlanetRoute from './routes/PlanetRoutes.js'
import PlanetDB from './config/PlanetDB.js'
dotenv.config()
PlanetDB()
const app=express()

app.use(cors())

app.use(express.json())

app.use("/api/auth/",PlanetRoute)

const port = process.env.PORT||5000

app.listen(port,()=>{


    console.log(`Successfully Running On http://localhost:${port}`);


    
})
