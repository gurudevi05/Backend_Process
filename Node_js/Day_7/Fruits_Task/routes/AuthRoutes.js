import express from 'express'
import { FruitController, FruitIdController, SearchController } from '../controllers/AuthControllers.js';

const router=express.Router()

router.post("/fruits",FruitController)
router.get("/:id",FruitIdController)
router.get("/search",SearchController)

export default router;