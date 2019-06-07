
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Tomato Sauce'},
        {ingredient: 'Italian Seasoning'},
        {ingredient: 'Mozzarella Cheese'},
        {ingredient: 'Cheddar Cheese'},
        {ingredient: 'Jalapenos'},
        {ingredient: 'All Purpose Flour'},
        {ingredient: 'Milk'},
        {ingredient: 'Green Bell Peppers'},
        {ingredient: 'Onions'},
        {ingredient: 'Mushrooms'},
        {ingredient: 'Garlic'},
        {ingredient: 'Tomatoes'},
        {ingredient: 'Artichokes'},
        {ingredient: 'Olives'},
        {ingredient: 'Basil'},
        {ingredient: 'Spinach'},
        {ingredient: 'Tortilla'},
        {ingredient: 'Chicken'},
        {ingredient: 'Lettuce'},
        {ingredient: 'Feta Cheese'},
        {ingredient: 'Avocados'},
        {ingredient: 'Pepper'},
        {ingredient: 'Salt'},
        {ingredient: 'Pepperoni'},
      ]);
    });
};
