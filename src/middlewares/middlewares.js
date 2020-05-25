import express from 'express';

import { app } from '../../app';
import routes from '../routes';

export const serverListening = () => {
  console.log(`${app.get('port')} 번 포트에서 대기 중..`);
};

export const exportVariables = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
