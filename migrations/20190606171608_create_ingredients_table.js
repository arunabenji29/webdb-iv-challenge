
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
        tbl.increments()
  
        tbl
        .string('ingredient',128)
        .notNullable()
        .unique();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
  };
