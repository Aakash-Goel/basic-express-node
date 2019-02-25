const users = [
  {
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
  },
  {
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
  },
];

// Below are the 'GET' request we have defined
const router = app => {
  // Open http://localhost:3002/
  app.get('/', (request, response) => {
      response.send('Node.js and Express REST API');
  });

  // Open http://localhost:3002/users
  // Below route is able to parse JSON becuse of the 'body-parser' middleware we have used inside 'index.js' file
  app.get('/users', (request, response) => {
      response.send(users);
  });
};

// Export the router
module.exports = router;
