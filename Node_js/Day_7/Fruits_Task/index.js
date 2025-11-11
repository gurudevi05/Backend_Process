
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoutes from "./routes/AuthRoutes.js"; // ✅ correct

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

app.use('/api/fruitshop',AuthRoutes)

const port = process.env.port||5000

app.listen(port,()=>{

    console.log(`successfully running on http://localhost: ${port}}`);
    
})

