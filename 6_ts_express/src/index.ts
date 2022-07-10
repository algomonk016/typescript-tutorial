// import express = require('express');
// import { router } from './routes/loginRoutes';
// import bodyParser = require('body-parser');
// import cookieSession = require('cookie-session');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['randomKey'] }));
// app.use(router);

// app.listen(3000, () => {
//   console.log('listening on port 3000');
// })

class Boat {
  color: string = 'red';

  get getColor(): string {
    return `color is ${this.color}`;
  }
  
  @logError('something bad!!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    desc.value = function() {
      try {
        method();
      } catch(e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot();