'use strict';

var utils = require('../utils/writer.js');
var AuthenticationUPUDocument = require('../service/AuthenticationUPUDocumentService');

module.exports.createAuthenticationUPU = function createAuthenticationUPU (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  AuthenticationUPUDocument.createAuthenticationUPU(ueId,body,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryAuthUPU = function queryAuthUPU (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supportedFeatures'].value;
  AuthenticationUPUDocument.queryAuthUPU(ueId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
