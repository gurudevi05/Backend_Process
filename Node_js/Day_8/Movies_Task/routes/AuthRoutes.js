
import express from 'express'
import { TamilMoviesController,MovieIdController,UpdateMovieController,DeleteMovieController } from '../controllers/AuthController.js';

const router= express.Router()

router.post('/tamilmovies',TamilMoviesController)
router.get('/:movieid',MovieIdController)
router.put('/:movieid',UpdateMovieController)
router.delete('/:movieid',DeleteMovieController)


export default router;