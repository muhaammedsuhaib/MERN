import express from 'express';
import { create_user, user_find } from './user.controles.js';
import { trycatch } from '../common/middlewares/trycatch.js';

const routes = express.Router();

routes.get('/user',trycatch(user_find));
routes.post('/user', trycatch(create_user));

export default routes;
