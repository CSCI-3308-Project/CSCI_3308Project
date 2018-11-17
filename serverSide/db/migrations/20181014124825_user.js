
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('user_id').primary();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.json('user_courses');
    table.datetime('created_at').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
