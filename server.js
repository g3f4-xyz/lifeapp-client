const express = require('express');
const morgan = require('morgan');
const simpleGit = require('simple-git/promise');
const spawn = require('child_process').spawn;

const { HOST, HTML_PATHS, ROUTES, PORT, PUBLIC_PATH } = require('./config');

// create server
const app = express();

// dev tools
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// set static folder
app.use(express.static(PUBLIC_PATH));
let previousBranch = null;

app.get(ROUTES.ROOT, async (req, res, next) => {
  console.log(['previousBranch'], previousBranch);
  console.log(['req.query.branch'], req.query.branch);
  previousBranch = req.query.branch;
  if (req.query.branch) {
    await simpleGit().checkout(req.query.branch);
    // Notice how your arguments are in an array of strings
    const child = spawn('npm', [
      'run',
      'build:heroku',
    ]);

    child.stdout.on('data', function (data) {
      process.stdout.write(data);
    });

    child.stderr.on('data', function (data) {
      process.stdout.write(data);
    });

    child.on('exit', function (data) {
      process.stdout.write('I\'m done!');
      res.redirect('/');
    });
  } else {
    res.sendFile(HTML_PATHS.APP);
  }
});

// set Port
app.set('port', (process.env.PORT || PORT));

// start server
app.listen(app.get('port'), () => console.log(`Server is now running on ${HOST}`));
