'use strict';


/**
 * Read the profile of a given UE
 *
 * ueId VarUeId pp data for a UE
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * returns PpData
 **/
exports.getppData = function(ueId,supportedFeatures,ifNoneMatch,ifModifiedSince) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

