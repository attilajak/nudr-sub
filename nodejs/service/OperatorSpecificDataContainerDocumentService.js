'use strict';


/**
 * To modify operator specific data of a UE
 *
 * body List 
 * ueId VarUeId UE id
 * no response value expected for this operation
 **/
exports.modifyOperSpecData = function(body,ueId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the operator specific data of a UE
 *
 * ueId VarUeId UE id
 * fields List attributes to be retrieved (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * returns OperatorSpecificDataContainer
 **/
exports.queryOperSpecData = function(ueId,fields,supportedFeatures,ifNoneMatch,ifModifiedSince) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

