
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + 'src/database/migrations'
  },
  useNullAsDefault: true,
};