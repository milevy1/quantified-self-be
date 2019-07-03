// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tracker_development',
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
    connection: {
      database: 'tracker_production',
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
