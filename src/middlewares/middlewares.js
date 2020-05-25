import express from 'express';

import  app from '../controllers/appController';
import routes from '../routes';


export const serverListening = () => {
  console.log(`Running Express On ${app.get('port')}..`);
};

export const exportVariables = (req, res, next) => {
  res.locals.routes = routes;
  next();
};

