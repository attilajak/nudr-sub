'use strict';

var utils = require('../utils/writer.js');
var SubsToNotifyCollection = require('../service/SubsToNotifyCollectionService');

module.exports.removeMultipleSubscriptionDataSubscriptions = function removeMultipleSubscriptionDataSubscriptions (req, res, next) {
  var ueId = req.swagger.params['ue-id'].value;
  var nfInstanceId = req.swagger.params['nf-instance-id'].value;
  var deleteAllNfs = req.swagger.params['delete-all-nfs'].value;
  var implicitUnsubscribeIndication = req.swagger.params['implicit-unsubscribe-indication'].value;
  SubsToNotifyCollection.removeMultipleSubscriptionDataSubscriptions(ueId,nfInstanceId,deleteAllNfs,implicitUnsubscribeIndication)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
