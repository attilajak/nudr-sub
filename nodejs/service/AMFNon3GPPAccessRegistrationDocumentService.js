'use strict';


/**
 * To modify the AMF context data of a UE using non 3gpp access in the UDR
 *
 * body List 
 * ueId VarUeId UE id
 * no response value expected for this operation
 **/
exports.amfContextNon3gpp = function(body,ueId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To store the AMF context data of a UE using non-3gpp access in the UDR
 *
 * ueId VarUeId UE id
 * body AmfNon3GppAccessRegistration  (optional)
 * no response value expected for this operation
 **/
exports.createAmfContextNon3gpp = function(ueId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the AMF context data of a UE using non-3gpp access
 *
 * ueId VarUeId UE id
 * fields List attributes to be retrieved (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns AmfNon3GppAccessRegistration
 **/
exports.queryAmfContextNon3gpp = function(ueId,fields,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

