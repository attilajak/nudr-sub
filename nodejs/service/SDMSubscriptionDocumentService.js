'use strict';


/**
 * Modify an individual sdm subscription
 *
 * body List 
 * ueId VarUeId UE id
 * subsId String 
 * no response value expected for this operation
 **/
exports.modifysdmSubscription = function(body,ueId,subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a sdmsubscriptions
 *
 * ueId VarUeId 
 * subsId String Unique ID of the subscription to remove
 * no response value expected for this operation
 **/
exports.removesdmSubscriptions = function(ueId,subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an individual sdm subscriptions of a UE
 *
 * ueId VarUeId 
 * subsId String 
 * body SdmSubscription  (optional)
 * no response value expected for this operation
 **/
exports.updatesdmsubscriptions = function(ueId,subsId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

