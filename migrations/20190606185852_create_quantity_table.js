
exports.up = function(knex, Promise) {
  return knex.schema.createTable('measurements', function(tbl){
      tbl.increments()

      tbl
      .float('measurement')
      .notNullable()
      .unique()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('measurements')
};
