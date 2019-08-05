'use strict';

var utils = require('../utils/writer.js');
var QueryAMFSubscriptionInfoDocument = require('../service/QueryAMFSubscriptionInfoDocumentService');

module.exports.getAmfSubscriptionInfo = function getAmfSubscriptionInfo (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  QueryAMFSubscriptionInfoDocument.getAmfSubscriptionInfo(ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
