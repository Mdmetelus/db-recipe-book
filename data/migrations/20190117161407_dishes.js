
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl.increment();
        tbl.string('name')
            .nutNullable()
            .unique()
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("dishes");
  
};
