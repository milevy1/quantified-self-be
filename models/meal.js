// const knex = require('knex')
const knex = require('../db/knex')({client: 'pg'})
const connection = require('../knexfile')
const { Model } = require('objection')
// const knexConnection = knex(connection)
// Model.knex(knexConnection)

class Meal extends Model {
  static get tableName () {
    return 'meals'
  }
  static get relationMappings () {
    const Food = require('./food')
    return {
      foods: {
        relation: Model.ManyToManyRelation,
        modelClass: Food,
        join: {
          from: 'meals.id',
          through: {
            from: 'meal_foods.food_id',
            to: 'meal_foods.meal_id'
          },
          to: 'foods.id'
        }
      }
    }
  }
}
module.exports = Meal
