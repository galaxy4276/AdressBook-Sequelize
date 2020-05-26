import express from 'express';
import morgan from 'morgan';
import path from 'path';


const app = express();

// Application Settings
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'pug');
app.set('views', './src/views');

// Application Middlewares ( Use )
app.use(morgan('dev'));
app.use('/public', express.static(path.resolve(__dirname, '../', 'public')));


export default app;