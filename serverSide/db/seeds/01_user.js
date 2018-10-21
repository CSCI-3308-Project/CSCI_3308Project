const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const users = [
        {
          id: 1,
          email: 'foobar@gmail.com',
          password: bcrypt.hashSync('pineapple',10),
          created_at: new Date()
        },
        {
          id: 2,
          email: 'hello@gmail.com',
          password: bcrypt.hashSync('frogger', 10),
          created_at: new Date()
        }
      ]
      return knex('users').insert(users)
    })
};
