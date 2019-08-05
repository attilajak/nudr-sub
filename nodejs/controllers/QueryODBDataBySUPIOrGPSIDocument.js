'use strict';

var utils = require('../utils/writer.js');
var QueryODBDataBySUPIOrGPSIDocument = require('../service/QueryODBDataBySUPIOrGPSIDocumentService');

module.exports.getOdbData = function getOdbData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  QueryODBDataBySUPIOrGPSIDocument.getOdbData(ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
