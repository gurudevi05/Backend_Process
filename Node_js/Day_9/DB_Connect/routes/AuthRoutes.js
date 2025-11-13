
import express from 'express'
import {  createDatas, getdatas } from '../controllers/AuthController.js';

const router=express.Router()

 router.post('/createDatas',createDatas)
 router.get('/getdatas',getdatas)

export default router;

//http://localhost:3000/api/auth/createDatas