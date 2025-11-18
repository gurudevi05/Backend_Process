
import express from 'express'
import { CollegeDatas, GetCollegeDatas } from '../controllers/AuthController.js';

const router=express.Router()


 router.post("/CollegeDatas",CollegeDatas)
 router.get("/GetCollegeDatas",GetCollegeDatas)

export default router;

// http://localhost:3000/api/auth/CollegeDatas

// http://localhost:3000/api/auth/GetCollegeDatas
