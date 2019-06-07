
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quantities', function(tbl){
      tbl.increments()

      tbl
      .float('measurement')
      .notNullable()
      .unique()
  })
};

exports.down = function(knex, Promise) {
  
};
