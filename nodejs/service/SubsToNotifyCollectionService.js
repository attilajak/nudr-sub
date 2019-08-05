'use strict';


/**
 * Deletes subscriptions identified by a given ue-id parameter
 *
 * ueId VarUeId UE ID
 * nfInstanceId NfInstanceId NF Instance ID (optional)
 * deleteAllNfs Boolean Flag to delete subscriptions from all NFs (optional)
 * implicitUnsubscribeIndication Boolean Implicit Unsubscribe Indication (optional)
 * no response value expected for this operation
 **/
exports.removeMultipleSubscriptionDataSubscriptions = function(ueId,nfInstanceId,deleteAllNfs,implicitUnsubscribeIndication) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

