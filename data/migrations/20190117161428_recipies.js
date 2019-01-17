
exports.up = function(knex, Promise) {
    return knex.schema.creaateTable('recipes', function(tbl) {});
  
};

exports.down = function(knex, Promise) {
  
};
