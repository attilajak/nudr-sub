'use strict';

var utils = require('../utils/writer.js');
var RetrievalOfSharedData = require('../service/RetrievalOfSharedDataService');

module.exports.getSharedData = function getSharedData (req, res, next) {
  var sharedDataIds = req.swagger.params['shared-data-ids'].value;
  var supportedFeatures = req.swagger.params['supportedFeatures'].value;
  RetrievalOfSharedData.getSharedData(sharedDataIds,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
