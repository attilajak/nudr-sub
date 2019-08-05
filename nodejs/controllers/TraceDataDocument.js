'use strict';

var utils = require('../utils/writer.js');
var TraceDataDocument = require('../service/TraceDataDocumentService');

module.exports.queryTraceData = function queryTraceData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var servingPlmnId = req.swagger.params['servingPlmnId'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  TraceDataDocument.queryTraceData(ueId,servingPlmnId,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
