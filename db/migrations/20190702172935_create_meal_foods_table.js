exports.up = function(knex, Promise) {
  return knex.schema.createTable('meal_foods', function(table) {
    table.increments();
    table.integer('food_id').references('id').inTable('foods');
    table.integer('meal_id').references('id').inTable('meals');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meal_foods');
}
