'use strict';

var utils = require('../utils/writer.js');
var AuthenticationDataDocument = require('../service/AuthenticationDataDocumentService');
console.log(AuthenticationDataDocument);
module.exports.queryAuthSubsData = function queryAuthSubsData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;

  AuthenticationDataDocument.queryAuthSubsData(ueId,supportedFeatures)
    .then(function (response) {
      console.log("queryAuthSubsData");
      var response = JSON.parse('{"authenticationMethod":"5G_AKA","encPermanentKey":"Sample text","protectionParameterId":"Sample text","sequenceNumber":{"sqnScheme":{},"sqn":"Sample text","lastIndexes":{},"indLength":1,"difSign":"POSITIVE"},"authenticationManagementField":"Sample text","algorithmId":"Sample text","encOpcKey":"e734f8734007d6c5ce7a0508809e7e9c","encTopcKey":"Sample text"}');
      utils.writeJson(res, response);
    })
    .catch(function (response) {

      utils.writeJson(res, response);
    });
};
