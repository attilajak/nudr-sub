'use strict';

var utils = require('../utils/writer.js');
var EventExposureSubscriptionsCollection = require('../service/EventExposureSubscriptionsCollectionService');

module.exports.createEeSubscriptions = function createEeSubscriptions (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  EventExposureSubscriptionsCollection.createEeSubscriptions(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryeesubscriptions = function queryeesubscriptions (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  EventExposureSubscriptionsCollection.queryeesubscriptions(ueId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
