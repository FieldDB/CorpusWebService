'use strict';
var expect = require('chai').expect;
var supertest = require('supertest');

describe('proxy', function() {
  it.skip('should support get', function(done) {
    try {
      var api = require('../bin/onlycouchdb');

      setTimeout(function() {
        supertest('http://127.0.0.1:' + process.env.PORT)
          .get('/notaroute')
          .end(function(err, res) {
            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(200);
            expect(res.headers['access-control-allow-methods']).to.equal('HEAD, POST, GET, PUT, PATCH, DELETE');
            expect(res.headers['access-control-allow-headers']).to.equal('accept, accept-charset, accept-encoding, accept-language, authorization, content-length, content-type, host, origin, proxy-connection, referer, user-agent, x-requested-with');
            expect(res.headers['access-control-allow-credentials']).to.equal('true')
            expect(res.headers['access-control-allow-origin']).to.equal('*')

            api.close();
            api = null;
            done();
          });
      }, 500);
    } catch (err) {
      expect(err.message).to.contain('Can\'t set headers after they are sent');
    }
  });
});
