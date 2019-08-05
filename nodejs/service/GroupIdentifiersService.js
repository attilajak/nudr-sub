'use strict';


/**
 * Mapping of Group Identifiers
 *
 * extGroupId ExtGroupId External Group Identifier (optional)
 * intGroupId GroupId Internal Group Identifier (optional)
 * supportedFeatures SupportedFeatures Supported Features (optional)
 * returns GroupIdentifiers
 **/
exports.getGroupIdentifiers = function(extGroupId,intGroupId,supportedFeatures) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

