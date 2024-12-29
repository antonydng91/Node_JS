import './App.css';
import React from 'react';
import App from './App';

function AppSSR() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>

      <body>
        <div id="root">
          <App></App>
        </div>
      </body>
    </html>
  );
}

export default AppSSR;
