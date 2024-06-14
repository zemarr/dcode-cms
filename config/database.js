const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("STAGING_DATABASE_URL"));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
