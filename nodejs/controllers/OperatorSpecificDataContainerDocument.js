'use strict';

var utils = require('../utils/writer.js');
var OperatorSpecificDataContainerDocument = require('../service/OperatorSpecificDataContainerDocumentService');

module.exports.modifyOperSpecData = function modifyOperSpecData (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  OperatorSpecificDataContainerDocument.modifyOperSpecData(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryOperSpecData = function queryOperSpecData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  OperatorSpecificDataContainerDocument.queryOperSpecData(ueId,fields,supportedFeatures,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
