module.exports = {
  development: {
    client: 'pg',
    //connection: 'postgres://localhost/studybuddies',
    connection: {
      host : 'localhost',
      database: 'studybuddies',
      user: 'postgres',
      password: 'Pokemon10!'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};
