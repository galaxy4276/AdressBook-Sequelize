import  app from '../controllers/appController';
import routes from '../routes';


export const serverListening = () => {
  console.log(`Running Express On ${app.get('port')}..`);
};

export const exportVariables = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

