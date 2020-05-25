import express from 'express';
import routes from './index';
import { goHome } from '../controllers/homeController';

const homeRouter = express.Router();

homeRouter.get(routes.home, goHome);


export default homeRouter;