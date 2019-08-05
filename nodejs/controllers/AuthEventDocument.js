'use strict';

var utils = require('../utils/writer.js');
var AuthEventDocument = require('../service/AuthEventDocumentService');

module.exports.queryAuthenticationStatus = function queryAuthenticationStatus (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  AuthEventDocument.queryAuthenticationStatus(ueId,fields,supportedFeatures)
    .then(function (response) {
      console.log("queryAuthenticationStatus")
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log("queryAuthenticationStatus")
      utils.writeJson(res, response);
    });
};
