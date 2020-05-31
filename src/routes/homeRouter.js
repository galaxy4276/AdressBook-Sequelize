import express from 'express';
import routes from './index';
import { goHome, goEditAddr, postEditAddr, postLogin, getLogin } from '../controllers/homeController';

const homeRouter = express.Router();

homeRouter.get(routes.home, goHome);
homeRouter.get(routes.editAdress, goEditAddr);
homeRouter.post(routes.editAdress, postEditAddr);

homeRouter.get(routes.login, getLogin);
homeRouter.post(routes.login, postLogin);

export default homeRouter;  