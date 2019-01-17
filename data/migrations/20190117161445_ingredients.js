
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        table.increments();

        table.integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes");

            table.real("quantity").notNullable();

            table.string("measure").notNullable();

            table.string("name").notNullable();

            tbl.timestamp(true, true);
    });
  
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists("ingredients");
  
};
