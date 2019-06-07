exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes',function(tbl) {
        tbl.increments();
  
        tbl
        .string('dishName',128)
        .notNullable()
        .unique();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
  };
