// const knex = require('knex')
const knex = require('knex')({client: 'pg'})
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = knex(connection)

Model.knex(knexConnection)

class Food extends Model {
  static get tableName () {
    return 'foods'
  }
  static get relationMappings () {
    const Meal = require('/.meal');
    return {
      meals: {
        relation: Model.ManyToManyRelation,
        modelClass: Meal,
        join: {
          from: 'foods.id',
          through: {
            from: 'meal_foods.food_id',
            to: 'meal_foods.meal_id'
          },
          to: 'meals.id'
        }
      }
    }
  }
}
module.exports = Food;
