'use strict';

var utils = require('../utils/writer.js');
var SubsToNofifyCollection = require('../service/SubsToNofifyCollectionService');

module.exports.querySubsToNotify = function querySubsToNotify (req, res, next) {
  var ueId = req.swagger.params['ue-id'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  SubsToNofifyCollection.querySubsToNotify(ueId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subscriptionDataSubscriptions = function subscriptionDataSubscriptions (req, res, next) {
  var body = req.swagger.params['body'].value;
  SubsToNofifyCollection.subscriptionDataSubscriptions(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
