import express from 'express';

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('Server reloading...');

    try {
      app = require('./server').default;
    } catch (error) {
      // Do nothing
    }
  });
}

const port = process.env.PORT || 3001;

express()
  .use((req, res) => app.handle(req, res))
  .listen(port, () => {
    console.log(`React SSR App is running: http://localhost:${port}`);
  });
