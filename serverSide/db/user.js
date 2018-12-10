const knex = require('./connection');

module.exports = {
    getOne: function(user_id) {
      return knex('users').where('user_id', user_id).first();
    },
    getOneByEmail: function (email) {
      return knex('users').where('email', email).first();
    },
    create: function(user) {
      return knex('users').insert(user, 'user_id')
      .then(ids => {
        return ids[0];
      });
    }
}
