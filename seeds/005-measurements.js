
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {measurement: 'oz'},
        {measurement: 'cup'},
        {measurement: 'ml'},
        {measurement: 'lb'},
        {measurement: 'teaspoon'}
      ]);
    });
};
