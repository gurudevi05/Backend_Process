
import express from 'express'
import { CreateDatas, DeleteDatas, EditDatas, GetDatas, UpdateDatas } from '../controllers/PlanetDataController.js';

const router=express.Router()

router.post ("/CreateDatas",CreateDatas)
router.get("/GetDatas",GetDatas)
router.get("/EditDatas/:id",EditDatas)
router.put("/UpdateDatas/:id",UpdateDatas)
router.delete("/DeleteDatas/:id",DeleteDatas)

export default router;

//http://localhost:3000/api/auth/CreateDatas

// http://localhost:3000/api/auth/GetDatas

// http://localhost:3000/api/auth/EditDatas/:id

// http://localhost:3000/api/auth/UpdateDatas/:id

// http://localhost:3000/api/auth/DeleteDatas/:id


