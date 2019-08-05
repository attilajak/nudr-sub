'use strict';

var utils = require('../utils/writer.js');
var SMFRegistrationsCollection = require('../service/SMFRegistrationsCollectionService');

module.exports.querySmfRegList = function querySmfRegList (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  SMFRegistrationsCollection.querySmfRegList(ueId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
