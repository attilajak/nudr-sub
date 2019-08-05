'use strict';

var utils = require('../utils/writer.js');
var AuthenticationStatusDocument = require('../service/AuthenticationStatusDocumentService');

module.exports.createAuthenticationStatus = function createAuthenticationStatus (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  AuthenticationStatusDocument.createAuthenticationStatus(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
