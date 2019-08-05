'use strict';


/**
 * Create individual EE subscription for a group of UEs or any UE
 *
 * body EeSubscription 
 * ueGroupId VarUeGroupId Group of UEs or any UE
 * returns EeSubscription
 **/
exports.createEeGroupSubscriptions = function(body,ueGroupId) {
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
 * Retrieves the ee subscriptions of a group of UEs or any UE
 *
 * ueGroupId VarUeGroupId Group of UEs or any UE
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns List
 **/
exports.queryEeGroupSubscriptions = function(ueGroupId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

