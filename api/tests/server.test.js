const request = require('supertest');
const { expect } = require('chai');
const server = require('../server.js'); // Adjust path as necessary

describe('Backend API Tests', () => {
  after(() => {
    server.close(); // Close the server after tests to free up the port
  });

  it('should return 200 OK when server is running', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  // Add more test cases as needed
});
