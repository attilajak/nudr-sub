'use strict';


/**
 * Create individual sdm subscription
 *
 * body SdmSubscription 
 * ueId VarUeId UE ID
 * returns SdmSubscription
 **/
exports.createSdmSubscriptions = function(body,ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves the sdm subscriptions of a UE
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns List
 **/
exports.querysdmsubscriptions = function(ueId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

