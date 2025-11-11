
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from './routes/AuthRoutes.js'
dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/api/auth",AuthRoute)




const port =process.env.PORT||5000

app.listen(port,()=>{

    console.log(`successfully running on http://localhost${port}`);
    
})