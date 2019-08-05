'use strict';


/**
 * Retrieves the trace configuration data of a UE
 *
 * ueId VarUeId UE id
 * servingPlmnId VarPlmnId PLMN ID
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * returns TraceData
 **/
exports.queryTraceData = function(ueId,servingPlmnId,ifNoneMatch,ifModifiedSince) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

