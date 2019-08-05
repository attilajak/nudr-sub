'use strict';

var utils = require('../utils/writer.js');
var SDMSubscriptionsCollection = require('../service/SDMSubscriptionsCollectionService');

module.exports.createSdmSubscriptions = function createSdmSubscriptions (req, res, next) {
  //var body = req.swagger.params['body'].value;
  var body = "kdkdk"
  var ueId = req.swagger.params['ueId'].value;
  SDMSubscriptionsCollection.createSdmSubscriptions(body,ueId)
    .then(function (response) {
      var response = JSON.parse('{"nfInstanceId":"3fa85f64-5717-4562-b3fc-2c963f66afa6","implicitUnsubscribe":true,"expires":"2019-07-17T10:26:39.748Z","callbackReference":"string","monitoredResourceUris":["string"],"singleNssai":{"sst":0,"sd":"string"},"dnn":"string","subscriptionId":"string","plmnId":{"mcc":"string","mnc":"string"}}');
      
      var code = 201;
      utils.writeJson(res, response, code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.querysdmsubscriptions = function querysdmsubscriptions (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  SDMSubscriptionsCollection.querysdmsubscriptions(ueId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
