'use strict';


/**
 * Retrieves the ee profile data of a UE
 *
 * ueId VarUeId UE id
 * fields List attributes to be retrieved (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns EeProfileData
 **/
exports.queryEEData = function(ueId,fields,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

