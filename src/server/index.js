const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

app.get('/getKey', function (request, response) {
  const token = process.env.MAPBOX_TOKEN || '';
  response.send(token);
});

app.use(express.static(path.join(__dirname, '../public')));

const start = function start() {
  return Promise.resolve()
    .then(() => app.listen(port))
    .catch(err => { console.log(err) });
};

module.exports = {
  start,
  app
};
