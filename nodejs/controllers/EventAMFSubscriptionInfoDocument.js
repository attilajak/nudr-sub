'use strict';

var utils = require('../utils/writer.js');
var EventAMFSubscriptionInfoDocument = require('../service/EventAMFSubscriptionInfoDocumentService');

module.exports.removeAmfSubscriptionsInfo = function removeAmfSubscriptionsInfo (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  EventAMFSubscriptionInfoDocument.removeAmfSubscriptionsInfo(ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
