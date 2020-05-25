import express from 'express';
import morgan from 'morgan';
import { serverListening, exportVariables } from '../middlewares/middlewares';
import routes from '../routes';
import homeRouter from '../routes/homeRouter';


const app = express();

// Application Settings
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'pug');
app.set('views', './src/views');

// Application Middlewares ( Use )
app.use(morgan('dev'));
app.use(express.static('./src/public'));

// routes or userMiddlewares
app.use(exportVariables);
app.use(routes.home, homeRouter);

export default app;