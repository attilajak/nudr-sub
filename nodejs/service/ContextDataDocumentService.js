'use strict';


/**
 * Retrieve multiple context data sets of a UE
 *
 * ueId VarUeId UE id
 * contextDatasetNames ContextDatasetNames List of context dataset names
 * returns ContextDataSets
 **/
exports.queryContextData = function(ueId,contextDatasetNames) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

