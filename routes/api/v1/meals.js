// const pry = require('pryjs');

var express = require('express');
var router = express.Router();
// Knex connection to database
const environment = process.env.NODE_ENV || "development";
const configuration = require("../../../knexfile")[environment];
const database = require("knex")(configuration);
//objection
const Food = require('../../../models/food');
const Meal = require('../../../models/meal');
const { Model } = require('objection');
Model.knex(database)

/* GET meals */
router.get('/', async (request, response) => {
  try {
    const meals = await Meal
    .query()
    .select('id', 'name')
    .eager('foods(selectNameAndCalories)', {
      selectNameAndCalories: function(builder){
        builder.select('name','calories')
      }
    })
    response.send(meals)

  } catch(error) {
    response.status(404).json({ error });
  }
});
/* GET meal by id and assoc foods */
router.get('/:meal_id/foods', async (request, response) => {
  const id_param = parseInt(request.params.meal_id)
  try {
    const meals = await Meal
    .query()
    .select('id', 'name')
    .where('id', id_param)
    .eager('foods(selectNameAndCalories)', {
      selectNameAndCalories: function(builder){
        builder.select('name','calories')
      }
    })
    response.send(meals)

  } catch(error) {
    response.status(404).json({ error });
  }
});

module.exports = router;
