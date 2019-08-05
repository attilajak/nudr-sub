'use strict';

var utils = require('../utils/writer.js');
var ParameterProvisionDocument = require('../service/ParameterProvisionDocumentService');

module.exports.getppData = function getppData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  ParameterProvisionDocument.getppData(ueId,supportedFeatures,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
