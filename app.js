var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var cors = require('cors');

var indexRouter = require('./routes/index.js');
var comentarioRouter = require('./routes/comentarios');
var db = require('./config/db.config');
const User = db.user;
const { Op } = require('sequelize');
var datetime = new Date();

var app = express();

// config dotenv and  
dotenv.config();
db.sync();

// swagger set up
var swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API REST Express de um gerenciador de comentários.',
    version: '1.0.0',
    description: ('Esta é uma aplicação de API REST feita com Express.' +
                  'Ela utiliza dados da API do Google Books.'),
    license: {
      name: 'Licenciado sob GPL.',
      url: 'https://github.com/mchlexe/SistemasDistribuidos-REST',
    },
    contact: {
      name: 'Michel Moreira',
      url: 'https://github.com/mchlexe',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};
var options = {
  swaggerDefinition,
  apis: ['./routes/comentarios.js'],
};
var swaggerSpec = swaggerJSDoc(options);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/comentarios', comentarioRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


module.exports = app;
