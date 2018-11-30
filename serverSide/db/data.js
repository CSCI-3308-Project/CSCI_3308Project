const knex = require('./connection');

module.exports = {
    getAll: function() {
      return knex.select().table('posts');
    },
    getSpecific: function(dataArr) {
      return knex.select().table('posts').whereIn('course', dataArr);
    }
}
