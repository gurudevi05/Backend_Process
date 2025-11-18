
import express from 'express'
import { CollegeDatas, CreateDatas,  EmployeeDatas,  MovieDatas, TableDatas } from '../controllers/AuthController.js';

const router=express.Router()

router.post("/CreateDatas",CreateDatas)
router.post("/MovieDatas",MovieDatas)
router.post("/CollegeDatas",CollegeDatas)
router.post("/EmployeeDatas",EmployeeDatas)

router.get("/TableDatas",TableDatas)


export default router;

// http://localhost:3000/api/auth/CreateDatas
// http://localhost:3000/api/auth/MovieDatas
// http://localhost:3000/api/auth/CollegeDatas
// http://localhost:3000/api/auth/EmployeeDatas

// http://localhost:3000/api/auth/TableDatas


