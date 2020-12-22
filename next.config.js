const { secrets } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      USERNAME: isDev ? "foo" : secrets.USERNAME,
      PASSWORD: isDev ? "bar" : secrets.PASSWORD,
    },
  };
};
