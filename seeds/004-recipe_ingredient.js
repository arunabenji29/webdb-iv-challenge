
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipe_id: 1, ingredient_id: 6, measurement_id: 2, quantity: 2 },
        { recipe_id: 1, ingredient_id: 1, measurement_id: 2, quantity: 2 },
        { recipe_id: 1, ingredient_id: 2, measurement_id: 5, quantity: 2 },
        { recipe_id: 1, ingredient_id: 3, measurement_id: 1, quantity: 4 },
        { recipe_id: 1, ingredient_id: 8, measurement_id: 4, quantity: .2 },
        { recipe_id: 1, ingredient_id: 9, measurement_id: 4, quantity: .1 },
        { recipe_id: 1, ingredient_id: 11, measurement_id: 4, quantity: .05 },
        { recipe_id: 1, ingredient_id: 24, measurement_id: 4, quantity: .15 },
        { recipe_id: 1, ingredient_id: 15, measurement_id: 1, quantity: .25 },
        { recipe_id: 2, ingredient_id: 6, measurement_id: 2, quantity: 2 },
        { recipe_id: 2, ingredient_id: 7, measurement_id: 3, quantity: 400 },
        { recipe_id: 2, ingredient_id: 2, measurement_id: 5, quantity: 2 },
        { recipe_id: 2, ingredient_id: 4, measurement_id: 1, quantity: 2 },
        { recipe_id: 2, ingredient_id: 10, measurement_id: 1, quantity: .2 },
        { recipe_id: 2, ingredient_id: 11, measurement_id: 5, quantity: 2 },
        { recipe_id: 2, ingredient_id: 12, measurement_id: 2, quantity: 1 },
        { recipe_id: 2, ingredient_id: 13, measurement_id: 4, quantity: .04 },
        { recipe_id: 2, ingredient_id: 14, measurement_id: 4, quantity: .05 },
        { recipe_id: 2, ingredient_id: 16, measurement_id: 1, quantity: 1 },
        { recipe_id: 2, ingredient_id: 5, measurement_id: 4, quantity: .05 },
        { recipe_id: 3, ingredient_id: 17, measurement_id: 4, quantity: 1 },
        { recipe_id: 3, ingredient_id: 19, measurement_id: 1, quantity: 2 },
        { recipe_id: 3, ingredient_id: 20, measurement_id: 4, quantity: .25 },
        { recipe_id: 3, ingredient_id: 8, measurement_id: 4, quantity: .2 },
        { recipe_id: 3, ingredient_id: 12, measurement_id: 4, quantity: .2 },
        { recipe_id: 3, ingredient_id: 21, measurement_id: 4, quantity: .2 },
        { recipe_id: 4, ingredient_id: 17, measurement_id: 4, quantity: 1 },
        { recipe_id: 4, ingredient_id: 19, measurement_id: 1, quantity: 1 },
        { recipe_id: 4, ingredient_id: 18, measurement_id: 4, quantity: .5 },
        { recipe_id: 4, ingredient_id: 22, measurement_id: 5, quantity: 1 },
        { recipe_id: 4, ingredient_id: 23, measurement_id: 5, quantity: .5 },
        { recipe_id: 4, ingredient_id: 8, measurement_id: 4, quantity: .4 },
        { recipe_id: 4, ingredient_id: 12, measurement_id: 4, quantity: .2 },
        { recipe_id: 4, ingredient_id: 4, measurement_id: 4, quantity: .3 }
      ]);
    });
};
