'use strict';

var utils = require('../utils/writer.js');
var EventExposureSubscriptionDocument = require('../service/EventExposureSubscriptionDocumentService');

module.exports.modifyEeGroupSubscription = function modifyEeGroupSubscription (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueGroupId = req.swagger.params['ueGroupId'].value;
  var subsId = req.swagger.params['subsId'].value;
  EventExposureSubscriptionDocument.modifyEeGroupSubscription(body,ueGroupId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyEesubscription = function modifyEesubscription (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  EventExposureSubscriptionDocument.modifyEesubscription(body,ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeEeGroupSubscriptions = function removeEeGroupSubscriptions (req, res, next) {
  var ueGroupId = req.swagger.params['ueGroupId'].value;
  var subsId = req.swagger.params['subsId'].value;
  EventExposureSubscriptionDocument.removeEeGroupSubscriptions(ueGroupId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeeeSubscriptions = function removeeeSubscriptions (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  EventExposureSubscriptionDocument.removeeeSubscriptions(ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEeGroupSubscriptions = function updateEeGroupSubscriptions (req, res, next) {
  var ueGroupId = req.swagger.params['ueGroupId'].value;
  var subsId = req.swagger.params['subsId'].value;
  var body = req.swagger.params['body'].value;
  EventExposureSubscriptionDocument.updateEeGroupSubscriptions(ueGroupId,subsId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEesubscriptions = function updateEesubscriptions (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  var body = req.swagger.params['body'].value;
  EventExposureSubscriptionDocument.updateEesubscriptions(ueId,subsId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
