'use strict';

var utils = require('../utils/writer.js');
var AMF3GPPAccessRegistrationDocument = require('../service/AMF3GPPAccessRegistrationDocumentService');

module.exports.amfContext3gpp = function amfContext3gpp (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  AMF3GPPAccessRegistrationDocument.amfContext3gpp(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAmfContext3gpp = function createAmfContext3gpp (req, res, next) {

  var ueId = req.swagger.params['ueId'].value;
  var body = "kfkdkdk";
  //var body = req.swagger.params['requestBody'].value;
  //console.log(req.swagger.params['ueId'].value)
  //console.log(req.swagger.params)
  AMF3GPPAccessRegistrationDocument.createAmfContext3gpp(ueId,body)
    .then(function (response) {
      var response = JSON.parse('{}');
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryAmfContext3gpp = function queryAmfContext3gpp (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  AMF3GPPAccessRegistrationDocument.queryAmfContext3gpp(ueId,fields,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
