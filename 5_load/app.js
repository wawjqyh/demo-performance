const express = require('express');
const static = require('serve-static');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(static('5-load/demo'));

app.listen(3000, onStart);

function onStart() {
  console.log('start');
}
