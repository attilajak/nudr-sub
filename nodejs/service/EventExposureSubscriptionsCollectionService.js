'use strict';


/**
 * Create individual EE subscription
 *
 * body EeSubscription 
 * ueId VarUeId UE ID
 * returns EeSubscription
 **/
exports.createEeSubscriptions = function(body,ueId) {
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
 * Retrieves the ee subscriptions of a UE
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns List
 **/
exports.queryeesubscriptions = function(ueId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

