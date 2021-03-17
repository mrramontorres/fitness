// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // this route loads index.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );

  // this route loads exercise.html
  app.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  );

  // this route loads stats.html
  app.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  );
};
