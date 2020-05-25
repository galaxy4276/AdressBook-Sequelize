import express from 'express';
import morgan from 'morgan';

// Externel Function Scope
import { serverListening, exportVariables } from './src/middlewares/middlewares';
import routes from './src/routes';
import homeRouter from './src/routes/homeRouter';

export const app = express();

// Application Settings
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }));

// Application Middlewares ( Use )
app.use(morgan('dev'));
app.use(express.static('./src/public'));

// routes or userMiddlewares
app.use(exportVariables);
app.use(routes.home, homeRouter);

app.listen(app.get('port'), serverListening);

