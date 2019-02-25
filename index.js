// Require packages
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const port = 3002;  // Define the port for which it'll run the server
const app = express();  // Define the express for running the server

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Open http://localhost:3002/ in your browser and you will see the message mentioned in the routes.js.
routes(app);

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
