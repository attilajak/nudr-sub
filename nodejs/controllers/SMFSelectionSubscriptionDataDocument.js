'use strict';

var utils = require('../utils/writer.js');
var SMFSelectionSubscriptionDataDocument = require('../service/SMFSelectionSubscriptionDataDocumentService');

module.exports.querySmfSelectData = function querySmfSelectData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var servingPlmnId = req.swagger.params['servingPlmnId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  SMFSelectionSubscriptionDataDocument.querySmfSelectData(ueId,servingPlmnId,fields,supportedFeatures,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
