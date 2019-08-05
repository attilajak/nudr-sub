'use strict';

var utils = require('../utils/writer.js');
var EventExposureGroupSubscriptionsCollection = require('../service/EventExposureGroupSubscriptionsCollectionService');

module.exports.createEeGroupSubscriptions = function createEeGroupSubscriptions (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueGroupId = req.swagger.params['ueGroupId'].value;
  EventExposureGroupSubscriptionsCollection.createEeGroupSubscriptions(body,ueGroupId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryEeGroupSubscriptions = function queryEeGroupSubscriptions (req, res, next) {
  var ueGroupId = req.swagger.params['ueGroupId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  EventExposureGroupSubscriptionsCollection.queryEeGroupSubscriptions(ueGroupId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
