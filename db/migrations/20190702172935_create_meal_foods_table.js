exports.up = function(knex, Promise) {
  return knex.schema.createTable('meal_foods', function(table) {
    table.increments();

    table.integer('food_id')
    .references('foods.id')
    .onUpdate('CASCADE') // if Food PK is changed, update this FK.
    .onDelete('CASCADE') // if referenced Food is deleted, delete this.

    table.integer('meal_id')
    .references('meals.id')
    .onUpdate('CASCADE') // if Meal PK is changed, update this FK.
    .onDelete('CASCADE') // if referenced Meal is deleted, delete this.

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meal_foods');
}
