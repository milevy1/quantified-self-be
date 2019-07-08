var express = require('express');
var router = express.Router();

// Knex connection to database
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

/* GET foods */
router.get('/', function(req, res, next) {
  database('foods').select('id', 'name', 'calories')
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});
// const Food = require('../../../models/food')
//
// router.get('/', (req, res) => {
//     Food.query()
//         .then(foods => {
//             res.json(foods)
//         })
// })
/* POST foods */
router.post('/', function(req, res, next) {
  const food = req.body.food

  database('foods').insert(food)
    .returning(['id', 'name', 'calories'])
    .then((food) => {
      res.status(200).json(food[0]);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

/* PATCH foods */
router.patch('/', async function(req, res, next) {
  const food_params = req.body.food

  // Checks if food sent with body
  if (!food_params) {
    res.status(400).json({ Format_Error: 'Example body format: { "food": { "name": "hamburger", "calories": "150" } }' });
  } else {
    database('foods').where('name', '=', food_params.name)
    .update(food_params)
    .returning(['id', 'name', 'calories'])
    .then((food) => {

      // Check food succesfully updated
      if (food[0]) {
        res.status(200).json(food[0]);
      } else {
        res.status(400).json({ Format_Error: `Unable to find food with name: ${food_params.name}` });
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
  }
});

/* DELETE foods */
router.delete('/:id', function(req, res, next) {
  const id_param = parseInt(req.params.id)

  database('foods')
    .where({ id: id_param })
    .del()
    .then((rowsDeleted) => {
      if (rowsDeleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ Error: `Unable to delete food with id: ${id_param}` });
      }
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
});

module.exports = router;
