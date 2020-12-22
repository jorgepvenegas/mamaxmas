const { secrets } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      USER: isDev ? "user" : secrets.USER,
      PASS: isDev ? "pass" : secrets.PASS,
    },
  };
};
