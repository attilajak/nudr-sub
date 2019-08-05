'use strict';

var utils = require('../utils/writer.js');
var SDMSubscriptionDocument = require('../service/SDMSubscriptionDocumentService');

module.exports.modifysdmSubscription = function modifysdmSubscription (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  SDMSubscriptionDocument.modifysdmSubscription(body,ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removesdmSubscriptions = function removesdmSubscriptions (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  SDMSubscriptionDocument.removesdmSubscriptions(ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatesdmsubscriptions = function updatesdmsubscriptions (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  var body = req.swagger.params['body'].value;
  SDMSubscriptionDocument.updatesdmsubscriptions(ueId,subsId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
