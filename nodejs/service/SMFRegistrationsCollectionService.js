'use strict';


/**
 * Retrieves the SMF registration list of a UE
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns SmfRegList
 **/
exports.querySmfRegList = function(ueId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

