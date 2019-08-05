'use strict';


/**
 * Retrieve ODB Data data by SUPI or GPSI
 *
 * ueId VarUeId UE ID
 * returns OdbData
 **/
exports.getOdbData = function(ueId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

