
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'coke', calories: 320},
        {id: 2, name: 'hamburger', calories: 780},
        {id: 3, name: 'french fries', calories: 350},
        {id: 4, name: 'apple', calories: 220},
        {id: 5, name: 'scrambled eggs', calories: 350},
        {id: 6, name: 'banana', calories: 150},
        {id: 7, name: 'yogurt', calories: 350},
        {id: 8, name: 'steak', calories: 350},
        {id: 9, name: 'potato', calories: 350},
        {id: 10, name: 'green beans', calories: 350}
      ]);
    });
};
