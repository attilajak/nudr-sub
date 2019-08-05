'use strict';


/**
 * To store the SoR acknowledgement information of a UE
 *
 * ueId VarUeId UE id
 * body SorData  (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * no response value expected for this operation
 **/
exports.createAuthenticationSoR = function(ueId,body,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the SoR acknowledgement information of a UE
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns SorData
 **/
exports.queryAuthSoR = function(ueId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

