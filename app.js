// Externel Function Scope
import app from './src/controllers/appController';
import { serverListening, exportVariables } from './src/middlewares/middlewares';
import routes from './src/routes';
import homeRouter from './src/routes/homeRouter';


// routes or userMiddlewares
app.use(exportVariables);
app.use(routes.home, homeRouter);


app.listen(app.get('port'), serverListening);
// 애플리케이션 실행

