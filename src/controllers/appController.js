import express from 'express';
import morgan from 'morgan';


const app = express();

// Application Settings
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'pug');
app.set('views', './src/views');

// Application Middlewares ( Use )
app.use(morgan('dev'));
app.use(express.static('./src/public'));


export default app;