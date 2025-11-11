
import express from 'express'
import { AuthController, StoneController, ThanosController,vibraniumController } from '../controllers/AuthController.js';

const Router=express.Router();


Router.post("/avengers",AuthController)

Router.get("/stone/:id",StoneController)

Router.get("/thanos",ThanosController)

Router.get("/vibranium",vibraniumController)



export default Router;