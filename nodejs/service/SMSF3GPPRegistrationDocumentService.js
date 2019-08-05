'use strict';


/**
 * Create the SMSF context data of a UE via 3GPP access
 *
 * ueId VarUeId UE id
 * body SmsfRegistration  (optional)
 * no response value expected for this operation
 **/
exports.createSmsfContext3gpp = function(ueId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To remove the SMSF context data of a UE via 3GPP access
 *
 * ueId VarUeId UE id
 * no response value expected for this operation
 **/
exports.deleteSmsfContext3gpp = function(ueId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the SMSF context data of a UE using 3gpp access
 *
 * ueId VarUeId UE id
 * fields List attributes to be retrieved (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns SmsfRegistration
 **/
exports.querySmsfContext3gpp = function(ueId,fields,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

