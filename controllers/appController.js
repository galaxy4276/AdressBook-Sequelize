import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookie from 'cookie-parser';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';

// sequelize 
const sequelize = require('../models').sequelize;
// passport 
import passportConfig from './passport';
import { test } from './homeController';

dotenv.config();  
const app = express();
sequelize.sync()
.then(() => {
    console.log('MySQL Connected!');
  })
  .catch((err) => {
    console.log('connect failed..\n', err);
  });

  
// Application Settings       
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, '../', 'views'));


//App test
console.log(`secret_key: ${process.env.SECRET_KEY}`);


// Application Middlewares ( Use )
app.use(morgan('dev'));
app.use('/public', express.static(path.resolve(__dirname, '../', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie(process.env.SECRET_KEY));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

export default app;