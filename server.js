'use strict';

const express = require('express');
const app = express();

// contain all server route definitions

// let's define our get endpoint
app.get('/', (request, response, next) => {
  response.send('hello');
});

app.get('/foo', (request, response, next) => {
  let responseObject = {
    number: 10,
    string: 'hello world',
  };
  response.json(responseObject);
});

// allows our express application to open itself up for conversations
function start(port) {
  app.listen(port, () => console.log('App is listening on port :: ', port));
}

module.exports = {
  app: app,
  start: start,
};