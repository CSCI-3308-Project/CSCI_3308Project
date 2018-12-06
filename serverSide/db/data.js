const knex = require('./connection');

module.exports = {
    getAll: function() {
      return knex.select().table('posts');
    },
    getSpecific: function(dataArr) {
      return knex.select('post_id','course','location','note','email').from('posts').join('users','users.user_id','=','posts.user_id').whereIn('course',dataArr);
    }
}
