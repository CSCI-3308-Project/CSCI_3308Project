const knex = require('./connection');

module.exports = {
    getAll: function() {
      return knex.select().table('posts');
    },
    getSpecific: function(dataArr) {
      return knex.select('posts.user_id','posts.post_id','posts.course','posts.location','posts.note','users.email').from('posts').join('users','users.user_id','=','posts.user_id').whereIn('course',dataArr);
    },
    addPost: function(postData) {
      return knex('posts').insert(postData);
    },
    deletePost: function(idArr) {
      return knex('posts').whereIn('post_id', idArr).del();
    }
}
