'use strict';


/**
 * retrieve shared data
 *
 * sharedDataIds SharedDataIds List of shared data ids
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns List
 **/
exports.getSharedData = function(sharedDataIds,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

