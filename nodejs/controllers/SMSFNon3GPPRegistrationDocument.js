'use strict';

var utils = require('../utils/writer.js');
var SMSFNon3GPPRegistrationDocument = require('../service/SMSFNon3GPPRegistrationDocumentService');

module.exports.createSmsfContextNon3gpp = function createSmsfContextNon3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  SMSFNon3GPPRegistrationDocument.createSmsfContextNon3gpp(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSmsfContextNon3gpp = function deleteSmsfContextNon3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  SMSFNon3GPPRegistrationDocument.deleteSmsfContextNon3gpp(ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.querySmsfContextNon3gpp = function querySmsfContextNon3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  SMSFNon3GPPRegistrationDocument.querySmsfContextNon3gpp(ueId,fields,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
