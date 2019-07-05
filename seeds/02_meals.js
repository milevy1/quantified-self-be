
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        { name: 'Breakfast' },
        { name: 'Lunch' },
        { name: 'Dinner' },
        { name: 'Snack' }
      ]);
    });
};
