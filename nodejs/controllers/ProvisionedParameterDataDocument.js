'use strict';

var utils = require('../utils/writer.js');
var ProvisionedParameterDataDocument = require('../service/ProvisionedParameterDataDocumentService');

module.exports.modifyPpData = function modifyPpData (req, res, next) {
  var body = req.swagger.params['body'].value;
  var ueId = req.swagger.params['ueId'].value;
  ProvisionedParameterDataDocument.modifyPpData(body,ueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
