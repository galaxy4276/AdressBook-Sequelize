import express from 'express';
import routes from './index';
import { goHome, goEditAddr, postEditAddr, postLogin, getLogin, getJoin, postJoin } from '../controllers/homeController';

const homeRouter = express.Router();

homeRouter.get(routes.home, goHome);
homeRouter.get(routes.editAdress, goEditAddr);
homeRouter.post(routes.editAdress, postEditAddr);

homeRouter.get(routes.login, getLogin);
homeRouter.post(routes.login, postLogin);

homeRouter.get(routes.join, getJoin); 
homeRouter.post(routes.join, postJoin);

export default homeRouter;  