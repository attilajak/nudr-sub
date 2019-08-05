'use strict';


/**
 * Retrieve multiple provisioned data sets of a UE
 *
 * ueId VarUeId UE id
 * servingPlmnId VarPlmnId PLMN ID
 * datasetNames DatasetNames List of dataset names (optional)
 * returns ProvisionedDataSets
 **/
exports.queryProvisionedData = function(ueId,servingPlmnId,datasetNames) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

