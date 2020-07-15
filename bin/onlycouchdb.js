#!/usr/bin/env node
var corsproxy = require("../lib/corsproxy");
var httpProxy = require("http-proxy");
/* Edited README to show that the target is not supposed to be an object, but rather a well formed url for a couchdb etc */
corsproxy.options = {
    target: "http://127.0.0.1:5984"
};
var host = process.env.HOST || process.argv[2] || "127.0.0.1";
var port = process.env.PORT || process.argv[3] || 9292;

var server = httpProxy.createServer(corsproxy).listen(port, host, function() {
  console.log("CORS Proxy started on %s:%d", host, port);
});

module.exports = server;
