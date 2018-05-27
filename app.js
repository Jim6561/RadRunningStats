var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var serveStatic = require('serve-static')
var favicon = require('serve-favicon');

var app = express();
const PORT = process.env.PORT || 5000;
const rootdir = process.cwd();


console.log('rootdir: ' + rootdir);

app.set('views', path.join(rootdir, 'views'));
app.set('view engine', 'pug');

app.use(require('./app/routers/'));
app.use(serveStatic(path.join(rootdir, 'lib')));
app.use(logger('dev'));
app.use(favicon(path.join(rootdir, 'public', 'favicon.gif')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));