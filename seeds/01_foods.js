
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        { name: 'coke', calories: 320 },
        { name: 'hamburger', calories: 780 },
        { name: 'french fries', calories: 350 },
        { name: 'apple', calories: 220 },
        { name: 'scrambled eggs', calories: 350 },
        { name: 'banana', calories: 150 },
        { name: 'yogurt', calories: 350 },
        { name: 'steak', calories: 350 },
        { name: 'potato', calories: 350 },
        { name: 'green beans', calories: 350 }
      ]);
    });
};
