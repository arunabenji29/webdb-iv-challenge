exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes' , function(tbl) {
        tbl.increments()
  
        tbl
        .string('recipeName',255)
        .notNullable()
        .unique();
  
        tbl
        .string('instructions',900)
        .notNullable()
        .unique();
  
        tbl
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
        
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
  };
