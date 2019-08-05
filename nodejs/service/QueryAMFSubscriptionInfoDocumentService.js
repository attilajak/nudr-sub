'use strict';


/**
 * Retrieve AMF subscription Info
 *
 * ueId VarUeId 
 * subsId String 
 * returns List
 **/
exports.getAmfSubscriptionInfo = function(ueId,subsId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

