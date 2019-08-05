'use strict';

var utils = require('../utils/writer.js');
var QueryIdentityDataBySUPIOrGPSIDocument = require('../service/QueryIdentityDataBySUPIOrGPSIDocumentService');

module.exports.getIdentityData = function getIdentityData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  QueryIdentityDataBySUPIOrGPSIDocument.getIdentityData(ueId,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
