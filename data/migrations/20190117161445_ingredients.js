
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();

        tbl.integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes");

            tbl.real("quantity").notNullable();

            tbl.string("measure").notNullable();

            tbl.string("name").notNullable();

            tbl.timestamp(true, true);
    });
  
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists("ingredients");
  
};
