const posts = require('../seedData/postData.js');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE posts CASCADE')
    .then(function () {
      return knex('posts').insert(posts)
    });
};
