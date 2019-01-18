
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();

        tbl.string('name');

        tbl.integer("dish_id")
            .unsigned()
            .references("id")
            .inTable("dishes");

        tbl.json("instructions");

        tbl.json("ingredients");
        
        tbl.timestamp(true, true);

    });
  
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists("recipes");
  
};
