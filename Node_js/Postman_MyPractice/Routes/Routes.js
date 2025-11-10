
import express from 'express'
import { AuthController } from '../Controller/AuthController.js';

const Router=express.Router();

Router.post("/datas",AuthController)
export default Router;