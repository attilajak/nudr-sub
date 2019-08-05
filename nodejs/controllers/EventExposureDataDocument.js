'use strict';

var utils = require('../utils/writer.js');
var EventExposureDataDocument = require('../service/EventExposureDataDocumentService');

module.exports.queryEEData = function queryEEData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supportedFeatures'].value;
  EventExposureDataDocument.queryEEData(ueId,fields,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
