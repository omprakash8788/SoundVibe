import express from 'express'
import { addAlbum, listAlbum, removeAlbum } from '../controllers/albumController.js'
import upload from '../middlewares/multer.js';
import rateLimiter from '../middlewares/rateLimiter.js';

const albumRouter= express.Router();
albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove',rateLimiter, removeAlbum);

export default albumRouter;

