// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tracker-development',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'tracker-staging',
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
    connection: {
      database: 'tracker-production',
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
  }

};
