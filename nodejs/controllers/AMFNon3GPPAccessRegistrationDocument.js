'use strict';

var utils = require('../utils/writer.js');
var AMFNon3GPPAccessRegistrationDocument = require('../service/AMFNon3GPPAccessRegistrationDocumentService');

module.exports.amfContextNon3gpp = function amfContextNon3gpp (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  AMFNon3GPPAccessRegistrationDocument.amfContextNon3gpp(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAmfContextNon3gpp = function createAmfContextNon3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var body = req.swagger.params['body'].value;
  AMFNon3GPPAccessRegistrationDocument.createAmfContextNon3gpp(ueId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryAmfContextNon3gpp = function queryAmfContextNon3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  AMFNon3GPPAccessRegistrationDocument.queryAmfContextNon3gpp(ueId,fields,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
