'use strict';

var utils = require('../utils/writer.js');
var AMFSubscriptionInfoDocument = require('../service/AMFSubscriptionInfoDocumentService');

module.exports.createAMFSubscriptions = function createAMFSubscriptions (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  var subsId = req.swagger.params['subsId'].value;
  AMFSubscriptionInfoDocument.createAMFSubscriptions(body,ueId,subsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
