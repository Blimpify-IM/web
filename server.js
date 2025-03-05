const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error starting server:');
    console.error(err);
    process.exit(1);
  }); 