import knex from 'knex';

const db = knex({
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    port: 5434,
    user: 'postgres',
    password: 'docker',
    database: 'marvelquiz'
  },
  useNullAsDefault: true
})

export default db;