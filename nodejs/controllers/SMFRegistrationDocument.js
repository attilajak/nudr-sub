'use strict';

var utils = require('../utils/writer.js');
var SMFRegistrationDocument = require('../service/SMFRegistrationDocumentService');

module.exports.createSmfContextNon3gpp = function createSmfContextNon3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var pduSessionId = req.swagger.params['pduSessionId'].value;
  var body = req.swagger.params['body'].value;
  SMFRegistrationDocument.createSmfContextNon3gpp(ueId,pduSessionId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSmfContext = function deleteSmfContext (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var pduSessionId = req.swagger.params['pduSessionId'].value;
  SMFRegistrationDocument.deleteSmfContext(ueId,pduSessionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.querySmfRegistration = function querySmfRegistration (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var pduSessionId = req.swagger.params['pduSessionId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  SMFRegistrationDocument.querySmfRegistration(ueId,pduSessionId,fields,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
