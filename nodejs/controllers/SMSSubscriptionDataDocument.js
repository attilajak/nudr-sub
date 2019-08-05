'use strict';

var utils = require('../utils/writer.js');
var SMSSubscriptionDataDocument = require('../service/SMSSubscriptionDataDocumentService');

module.exports.querySmsData = function querySmsData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var servingPlmnId = req.swagger.params['servingPlmnId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  SMSSubscriptionDataDocument.querySmsData(ueId,servingPlmnId,supportedFeatures,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
