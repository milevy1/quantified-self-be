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

module.exports = router;
