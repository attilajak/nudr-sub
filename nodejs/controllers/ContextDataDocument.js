'use strict';

var utils = require('../utils/writer.js');
var ContextDataDocument = require('../service/ContextDataDocumentService');

module.exports.queryContextData = function queryContextData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var contextDatasetNames = req.swagger.params['context-dataset-names'].value;
  ContextDataDocument.queryContextData(ueId,contextDatasetNames)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
