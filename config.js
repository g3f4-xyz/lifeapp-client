const HOST = process.env.HOST || 'http://localhost:3000';
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = `${process.cwd()}/build`;
const ROUTES = {
  ROOT: '/',
};
const HTML_PATHS = {
  APP: `${PUBLIC_PATH}/app.html`,
  LOGIN: `${PUBLIC_PATH}/login.html`,
};

module.exports = {
  HTML_PATHS,
  HOST,
  PORT,
  PUBLIC_PATH,
  ROUTES,
};
