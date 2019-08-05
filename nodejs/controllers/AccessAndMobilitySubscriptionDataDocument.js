'use strict';

var utils = require('../utils/writer.js');
var AccessAndMobilitySubscriptionDataDocument = require('../service/AccessAndMobilitySubscriptionDataDocumentService');

module.exports.queryAmData = function queryAmData (req, res, next) {
  var ueId = req.swagger.params['ueId'].value;
  var servingPlmnId = req.swagger.params['servingPlmnId'].value;
  var fields = req.swagger.params['fields'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  var ifNoneMatch = req.swagger.params['If-None-Match'].value;
  var ifModifiedSince = req.swagger.params['If-Modified-Since'].value;
  AccessAndMobilitySubscriptionDataDocument.queryAmData(ueId,servingPlmnId,fields,supportedFeatures,ifNoneMatch,ifModifiedSince)
    .then(function (response) {
      var responseobj = JSON.parse('{"supportedFeatures":"string","gpsis":["string"],"internalGroupIds":["string"],"subscribedUeAmbr":{"uplink":"string","downlink":"string"},"nssai":{"supportedFeatures":"string","defaultSingleNssais":[{"sst":0,"sd":"string"}],"singleNssais":[{"sst":0,"sd":"string"}]},"ratRestrictions":["NR","string"],"forbiddenAreas":[null,null],"serviceAreaRestriction":{"areas":[null,null],"maxNumOfTAs":0,"maxNumOfTAsForNotAllowedAreas":0},"coreNetworkTypeRestrictions":["5GC","string"],"rfspIndex":0,"subsRegTimer":0,"ueUsageType":0,"mpsPriority":true,"mcsPriority":true,"activeTime":0,"dlPacketCount":0,"sorInfo":{"ackInd":true,"sorMacIausf":"string","countersor":"string","provisioningTime":"2019-07-23T08:02:31.927Z"},"upuInfo":{"upuDataList":[null,null],"upuRegInd":true,"upuAckInd":true,"upuMacIausf":"string","counterUpu":"string","provisioningTime":"2019-07-23T08:02:31.927Z"},"micoAllowed":true,"sharedAmDataIds":["string"],"subscribedDnnList":["string"]}');

      utils.writeJson(res, responseobj);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
