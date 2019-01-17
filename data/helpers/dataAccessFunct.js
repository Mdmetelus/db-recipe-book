const db = require("../dbConfig");

module.exports = {

  getDishes: function() {
    return db('dishes');
  },
  addDish: function(dish) {
    return db('dishes').insert(dish);
  },
  getDish: function(id) {
    return db('dishes')
      .where('id', id)
      .first();
  }
 
};
