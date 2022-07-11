import express = require('express');
import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators/controller'
import bodyParser = require('body-parser');
import cookieSession = require('cookie-session');

import './controllers/LoginController'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['randomKey'] }));
app.use(router);
app.use(controllerRouter)

app.listen(3000, () => {
  console.log('listening on port 3000');
})