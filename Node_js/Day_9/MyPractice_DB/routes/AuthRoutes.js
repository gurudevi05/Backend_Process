
import express from 'express'
import { CreateStudentDatas, GetStudentDatas } from '../controllers/AuthControllers.js';

export const router=express.Router()

router.post("/CreateStudentDatas",CreateStudentDatas)
router.get("/GetStudentDatas",GetStudentDatas)
 

export default router;

//http://localhost:3000/api/auth/CreateStudentDatas

//http://localhost:3000/api/auth/GetStudentDatas
