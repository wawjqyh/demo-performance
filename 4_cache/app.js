const express = require('express');
const static = require('serve-static');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(static('4-cache/static'));

/**
 * etag/last-modified 需要相应的服务端配置
 * 原理是获取 request header 中的 etag 值跟目标资源的 etag 值对比
 * 如果相同则返回 304，不同则返回目标资源
 */
// app.use(
//   static('4-cache/static', {
//     etag: true,
//     lastModified: true,
//     maxAge: 0
//   })
// );

app.listen(3000, onStart);

function onStart() {
  console.log('start');
}
