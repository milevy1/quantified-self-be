// Update with your config settings.
// const config = require('config');
// const postgres = config.get('postgres');
// require('dotenv').config({path: 'path_to_env_file'});
// require('dotenv').config()
// const pg = require('pg')
// pg.defaults.ssl = true

module.exports = {
  client: 'pg',
  // connection: process.env.DATABASE_URL,
  development: {
    client: 'pg',
    connection: {
      database: 'tracker_development',
      host : '127.0.0.1',
      user: 'jennicastiehl',
      password: null
    },
              migrations: {
                directory: './db/migrations'
                    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'tracker_staging',
      user:     'jennicastiehl',
      password: 'null'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    }
  }

};
