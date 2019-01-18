
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {

        tbl.increments();

        tbl.string('name')
            .notNullable()
            .unique()

            tbl.timestamp(true, true);
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("dishes");
  
};
