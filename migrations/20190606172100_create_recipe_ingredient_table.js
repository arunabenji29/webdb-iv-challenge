exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', function(tbl) {
        tbl.increments()
  
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
        tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
        tbl
        .integer('quantity_id')
        .unsigned()
        .references('id')
        .inTable('quantity')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl
        .float('quantity')
        .notNullable()
        
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients')

  };
  