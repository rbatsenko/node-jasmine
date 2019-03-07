const Express = require('express');

const app = Express();

app.get("/", (req, res) => {
  res.status(200).send('Hi DUDE :)');
});

app.get("/test", (req, res) => {
  res.status(500).send({ 'message': 'This is an error response' });
});

const server = app.listen(3000, () => {
  console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;