'use strict';

var utils = require('../utils/writer.js');
var SubsToNotifyDocument = require('../service/SubsToNotifyDocumentService');

module.exports.modifysubscriptionDataSubscription = function modifysubscriptionDataSubscription (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  SubsToNotifyDocument.modifysubscriptionDataSubscription(body,ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removesubscriptionDataSubscriptions = function removesubscriptionDataSubscriptions (req, res, next) {
  var subsId = req.swagger.params['subsId'].value;
  SubsToNotifyDocument.removesubscriptionDataSubscriptions(subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
