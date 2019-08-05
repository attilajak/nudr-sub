'use strict';


/**
 * Retrieves the list of subscriptions
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns List
 **/
exports.querySubsToNotify = function(ueId,supportedFeatures) {
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
 * Subscription data subscriptions
 *
 * body SubscriptionDataSubscriptions 
 * returns SubscriptionDataSubscriptions
 **/
exports.subscriptionDataSubscriptions = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

