import knex from 'knex';

const db = knex({
  client: 'postgres',
  connection: {
    host: process.env.DB_HOST_PROD,
    port: 5434,
    user: process.env.DB_HOST_PROD,
    password: process.env.DB_HOST_PROD,
    database: process.env.DB_HOST_PROD
  },
  useNullAsDefault: true
})

export default db;