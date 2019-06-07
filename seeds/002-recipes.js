
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([

        {recipeName: 'New York Pizza',
        dish_id:1,
        'instructions':'Make dough, spread tomato sauce, add toppings of your choice,'
      },

        {recipeName: 'Chicago Style Pizza',
        dish_id:1,
        instructions:'Make dough, spread alfredo sauce, add toppings of your choice,'
      },

        {recipeName: 'Veg Taco',
        dish_id:2,
        instructions:'Heat Tortilla shells, add veggies and cheddar cheese'
      },

        {recipeName: 'Chicken Taco',
        dish_id:2,
        instructions:'Heat Tortilla shells, add chicken, veggies, lettuce, cheddar and feta cheese'
      }
      ]);
    });
};
