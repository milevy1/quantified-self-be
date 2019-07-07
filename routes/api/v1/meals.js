const pry = require('pryjs');

var express = require('express');
var router = express.Router();

// Knex connection to database
const environment = process.env.NODE_ENV || "development";
const configuration = require("../../../knexfile")[environment];
const database = require("knex")(configuration);

const Food = require('../../../models/food');
const Meal = require('../../../models/meal');
const { Model } = require('objection');
Model.knex(database)
/* GET meals */
router.get('/', async (request, response) => {
  try {
    const meals = await Meal
      .query()
      .eager('foods');
    response.send(meals)
    }
    catch (error) {
      // eval(pry.it)
      response.status(404).json({ error })
    }
});
// router.get('/', (req, res) => {
//     Meal.query()
//         .then(meals => {
//             res.json(meals)
//         })
// })
//-------------
// router.get('/', function(req, res, next) {
//   database('meals').select('id', 'name')
//     .then((meals) => {
//       res.status(200).json(meals);
//     })
//     .catch((error) => {
//       res.status(500).json({ error });
//     });
// });
//-----------------------
// const objection = require('objection');
// const Food = require('../../../models/food');
// const Meal = require('../../../models/meal');
// router.get('/', async (req, res) => {
  // try {
    // const meals = await Meal
      // .query()
      // .eager('foods');
    // res.send(meals)
    //
    // }
    // catch (error) {
    //   res.status(404).json({ error })
    // }
// });

module.exports = router;