'use strict';

var utils = require('../utils/writer.js');
var GroupIdentifiers = require('../service/GroupIdentifiersService');

module.exports.getGroupIdentifiers = function getGroupIdentifiers (req, res, next) {
  var extGroupId = req.swagger.params['ext-group-id'].value;
  var intGroupId = req.swagger.params['int-group-id'].value;
  var supportedFeatures = req.swagger.params['supported-features'].value;
  GroupIdentifiers.getGroupIdentifiers(extGroupId,intGroupId,supportedFeatures)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
