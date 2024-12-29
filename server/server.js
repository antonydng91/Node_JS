import fs from 'fs';
import path from 'path';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import App from '../src/App';

const app = express();

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('some error happened');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
  //const { pipe } = renderToPipeableStream(<App />, {
  //   bootstrapScripts: ['/main.94a7390f.js'],
  //   onShellReady() {
  //     res.setHeader('content-type', 'text/html');
  //     pipe(res);
  //   },
  // });
});
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.listen(8000, () => {
  console.log('App launched');
});
