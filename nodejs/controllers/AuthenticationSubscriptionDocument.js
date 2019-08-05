'use strict';

var utils = require('../utils/writer.js');
var AuthenticationSubscriptionDocument = require('../service/AuthenticationSubscriptionDocumentService');

module.exports.modifyAuthenticationSubscription = function modifyAuthenticationSubscription (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  AuthenticationSubscriptionDocument.modifyAuthenticationSubscription(body,ueId)
    .then(function (response) {
      console.log("modifyAuthenticationSubscription");
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log("modifyAuthenticationSubscription");
      utils.writeJson(res, response);
    });
};
