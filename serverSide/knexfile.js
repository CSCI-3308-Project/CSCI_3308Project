module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
      database: 'studybuddies',
      user: 'julienrumsey',
      password: 'element5'
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
