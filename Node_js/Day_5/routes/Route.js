
import express from 'express'
import { addNumber, AuthController, reverseController } from '../controller/AuthController.js'

const router=express.Router()

router.post("/datas",AuthController)
router.post("/reverse",reverseController)
router.post("/add",addNumber)

export default router;


