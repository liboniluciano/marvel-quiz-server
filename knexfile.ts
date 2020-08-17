import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5434,
    user: 'postgres',
    password: 'docker',
    database: 'marvelquiz'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};