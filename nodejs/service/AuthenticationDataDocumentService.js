//'use strict';


/**
 * Retrieves the authentication subscription data of a UE
 *
 * ueId VarUeId UE id
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns AuthenticationSubscription
 **/
exports.queryAuthSubsData = function(ueId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      console.log("Hello World");
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
      console.log("Hello World");
    }
  });
}

