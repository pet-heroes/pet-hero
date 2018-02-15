// Global modules/packages
const assert = require('assert');
const request = require('supertest');

// Local modules
const app = require('../app');

describe('Express Application', () => {
  it('Handles a GET request to /', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        assert(res.ok);
        done();
      });
  });

  it('Handles a GET request to /api', done => {
    request(app)
      .get('/api')
      .end((err, res) => {
        assert(res.body.message === 'Welcome to the Pet Hero API! Goodness coming soon...');
        done();
      });
  });
});
