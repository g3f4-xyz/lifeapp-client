const express = require('express');
const morgan = require('morgan');

const { HOST, HTML_PATHS, ROUTES, PORT, PUBLIC_PATH } = require('./config');

// create server
const app = express();

// dev tools
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// set static folder
app.use(express.static(PUBLIC_PATH));

app.get(ROUTES.ROOT, (req, res) => {
  res.sendFile(HTML_PATHS.APP);
});

// set Port
app.set('port', (process.env.PORT || PORT));

// start server
app.listen(app.get('port'), () => console.log(`Server is now running on ${HOST}`));
