'use strict';

var utils = require('../utils/writer.js');
var ProvisionedDataDocument = require('../service/ProvisionedDataDocumentService');

module.exports.queryProvisionedData = function queryProvisionedData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var servingPlmnId = req.swagger.params['servingPlmnId'].value;
  var datasetNames = req.swagger.params['dataset-names'].value;
  ProvisionedDataDocument.queryProvisionedData(ueId,servingPlmnId,datasetNames)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
