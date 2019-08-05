'use strict';

var utils = require('../utils/writer.js');
var AuthenticationSoRDocument = require('../service/AuthenticationSoRDocumentService');

module.exports.createAuthenticationSoR = function createAuthenticationSoR (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  AuthenticationSoRDocument.createAuthenticationSoR(ueId,body,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryAuthSoR = function queryAuthSoR (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supportedFeatures'].value;
  AuthenticationSoRDocument.queryAuthSoR(ueId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
