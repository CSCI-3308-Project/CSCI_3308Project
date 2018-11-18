
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', function(table) {
    table.increments('user_id').primary();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.json('user_courses');
    table.datetime('created_at').notNullable();
  })
  .createTable('posts', function(table) {
    table.increments('post_id').primary();
    table.integer('user_id').notNullable().references('users.user_id');
    table.text('course');
    table.text('location');
    table.string('note', [140]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('posts')
  .dropTableIfExists('users');
};
