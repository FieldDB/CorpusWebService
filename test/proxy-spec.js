'use strict';
var expect = require('chai').expect;
var supertest = require('supertest');

describe('proxy', function() {
  it.skip('should support post', function(done) {
    var postTest = function() {
      return new Promise(function(resolve, reject) {
        var api = require('../bin/onlycouchdb');
          console.log('api.address()', api.address());

          console.log('will request post')
          supertest('http://127.0.0.1:' + process.env.PORT)
            .post('/notaroute')
            .end(function(err, res) {
              console.log('done post', res.headers)
              if (err) {
                throw err;
              }
              expect(res.status).to.equal(200);
              expect(res.headers['access-control-allow-methods']).to.equal('HEAD, POST, GET, PUT, PATCH, DELETE');
              expect(res.headers['access-control-allow-headers']).to.equal('accept, accept-charset, accept-encoding, accept-language, authorization, content-length, content-type, host, origin, proxy-connection, referer, user-agent, x-requested-with');
              expect(res.headers['access-control-allow-credentials']).to.equal('true')
              expect(res.headers['access-control-allow-origin']).to.equal('*')

              api.close();
              api = null;
              resolve();
              done();
            });
      })
    };

    postTest().catch( function(err){
      console.log('err', err)
    })

    return expect(postTest).to.throw(/set headers after they are sent/);
  });
});
