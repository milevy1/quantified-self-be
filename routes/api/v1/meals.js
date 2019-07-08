const pry = require('pryjs');
// eval(pry.it)

var express = require('express');
var router = express.Router();
// Knex connection to database
const environment = process.env.NODE_ENV || "development";
const configuration = require("../../../knexfile")[environment];
const database = require("knex")(configuration);
//objection
const Food = require('../../../models/food');
const Meal = require('../../../models/meal');
const MealFood = require('../../../models/meal_food');
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
/* POST food with assoc meal */
router.post('/:meal_id/foods/:id', async(req, res) => {
try {
  const food= await Food.query().findById(req.params.id);
  const meal = await Meal.query().findById(req.params.meal_id);
  const wait = await food.$relatedQuery('meals').relate(meal.id);
  res.send('message: Successfully added food.name'+' to '+ 'meal.name')
}
    catch(error) {
      res.status(500).json({ error });
    }
});
//delete a meal_foods record
router.delete('/:meal_id/foods/:id', async (req, res) => {
  try {
  const numDeleted = await MealFood
    .query()
    .delete()
    .where("food_id", parseInt(req.params.id))
    .where("meal_id", parseInt(req.params.meal_id));
  res.status(204).send();
}
    catch(error) {
      res.status(404).json({ error });
    }
});
module.exports = router;
