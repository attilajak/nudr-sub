'use strict';


/**
 * To create an individual SMF context data of a UE in the UDR
 *
 * ueId VarUeId UE id
 * pduSessionId PduSessionId PDU session id
 * body SmfRegistration  (optional)
 * no response value expected for this operation
 **/
exports.createSmfContextNon3gpp = function(ueId,pduSessionId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To remove an individual SMF context data of a UE the UDR
 *
 * ueId VarUeId UE id
 * pduSessionId PduSessionId PDU session id
 * no response value expected for this operation
 **/
exports.deleteSmfContext = function(ueId,pduSessionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves the individual SMF registration of a UE
 *
 * ueId VarUeId UE id
 * pduSessionId PduSessionId PDU session id
 * fields List attributes to be retrieved (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns SmfRegistration
 **/
exports.querySmfRegistration = function(ueId,pduSessionId,fields,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

