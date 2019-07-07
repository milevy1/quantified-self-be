require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var foodsRouter = require('./routes/api/v1/foods');
var mealsRouter = require('./routes/api/v1/meals');

var app = express();
//knex & objection---
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');
const knex = Knex(knexConfig);
Model.knex(knex);

const port = process.env.PORT || 5000
//knex & objection---

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/foods', foodsRouter);
app.use('/api/v1/meals', mealsRouter);

app.listen(port, () => {
	console.log('Listening on port: ' + port)
})

const Meal = require('./models/meal');
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

Model.knex(database)
app.get('/', async (request, response) => {
  try {
    const meals = await Meal
      .query();
    response.send(meals)
    }
    catch (error) {
      eval(pry.it)
      response.status(404).json({ error })
    }
});
module.exports = app;
