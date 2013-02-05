exports.port = "3186";
exports.httpsOptions = {
  key : 'fielddb_debug.key',
  cert : 'fielddb_debug.crt',
  port : "3186",
  host : "localhost",
  method: 'POST'
};
exports.usersDbConnection = {
  protocol : 'http://',
  domain : 'localhost',
  port : '5984',
  dbname : 'zfielddbuserscouch',
  path: ""
};
