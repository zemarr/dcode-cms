module.exports = ({ env }) => ({
  proxy: true,
  url: env('APP_URL'), // Sets the public URL of the application.
  port: env("PORT", '0.0.0.0'),
  app: {
    keys: env.array('APP_KEYS')
  },
});
