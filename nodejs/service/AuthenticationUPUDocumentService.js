'use strict';


/**
 * To store the UPU acknowledgement information of a UE
 *
 * ueId VarUeId UE id
 * body UpuData  (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * no response value expected for this operation
 **/
exports.createAuthenticationUPU = function(ueId,body,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the UPU acknowledgement information of a UE
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns UpuData
 **/
exports.queryAuthUPU = function(ueId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

