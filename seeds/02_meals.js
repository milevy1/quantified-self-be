
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {id: 1, name: 'Breakfast'},
        {id: 2, name: 'Lunch'},
        {id: 3, name: 'Dinner'},
        {id: 4, name: 'Snack'}
      ]);
    });
};
