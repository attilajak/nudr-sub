'use strict';

var utils = require('../utils/writer.js');
var SMSF3GPPRegistrationDocument = require('../service/SMSF3GPPRegistrationDocumentService');

module.exports.createSmsfContext3gpp = function createSmsfContext3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  SMSF3GPPRegistrationDocument.createSmsfContext3gpp(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSmsfContext3gpp = function deleteSmsfContext3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  SMSF3GPPRegistrationDocument.deleteSmsfContext3gpp(ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.querySmsfContext3gpp = function querySmsfContext3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  SMSF3GPPRegistrationDocument.querySmsfContext3gpp(ueId,fields,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
