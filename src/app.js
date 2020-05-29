// Externel Function Scope
import app from './controllers/appController';
import { serverListening, exportVariables } from './middlewares/middlewares';
import routes from './routes';
import homeRouter from './routes/homeRouter';
  

// routes or userMiddlewares
app.use(exportVariables);
app.use(routes.home, homeRouter);


app.listen(app.get('port'), serverListening);
// 애플리케이션 실행

