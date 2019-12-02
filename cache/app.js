const Koa = require('koa');
const onerror = require('koa-onerror');
const logger = require('koa-logger');
const koaStatic = require('koa-static');
const koaConditionalGet = require('koa-conditional-get');
const koaEtag = require('koa-etag');
const path = require('path');
const app = new Koa();

onerror(app);
app.use(logger());

// app.use(async (ctx, next) => {
//   ctx.set({
//     'Cache-Control': 'max-age=10'
//   });
//   await next();
// });

// app.use(koaConditionalGet());
// app.use(koaEtag());

app.use(koaStatic(path.resolve(__dirname, '../static')));

module.exports = app;
