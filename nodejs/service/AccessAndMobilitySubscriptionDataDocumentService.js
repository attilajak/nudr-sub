'use strict';


/**
 * Retrieves the access and mobility subscription data of a UE
 *
 * ueId VarUeId UE id
 * servingPlmnId VarPlmnId PLMN ID
 * fields List attributes to be retrieved (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * ifNoneMatch String Validator for conditional requests, as described in RFC 7232, 3.2 (optional)
 * ifModifiedSince String Validator for conditional requests, as described in RFC 7232, 3.3 (optional)
 * returns AccessAndMobilitySubscriptionData
 **/
exports.queryAmData = function(ueId,servingPlmnId,fields,supportedFeatures,ifNoneMatch,ifModifiedSince) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

