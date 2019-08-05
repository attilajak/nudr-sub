'use strict';


/**
 * Retrieve identity data by SUPI or GPSI
 *
 * ueId VarUeId UE ID
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * returns IdentityData
 **/
exports.getIdentityData = function(ueId,ifNoneMatch,ifModifiedSince) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

