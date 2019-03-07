const Request = require('request');

describe('Server', () => {
  let server;
  beforeAll(() => {
    server = require('../app');
  });
  afterAll(() => {
    server.close();
  });
  describe('GET /', () => {
    let data = {};
    beforeAll(() => {
      Request.get('http://localhost:3000/', (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
      })
    })
  });
});