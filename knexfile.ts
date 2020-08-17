import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST_PROD,
    port: 5434,
    user: process.env.DB_HOST_PROD,
    password: process.env.DB_HOST_PROD,
    database: process.env.DB_HOST_PROD
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};