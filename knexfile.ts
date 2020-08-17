import path from 'path';

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};