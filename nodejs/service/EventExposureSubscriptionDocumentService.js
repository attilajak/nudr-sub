'use strict';


/**
 * Modify an individual ee subscription for a group of a UEs
 *
 * body List 
 * ueGroupId VarUeGroupId 
 * subsId String 
 * no response value expected for this operation
 **/
exports.modifyEeGroupSubscription = function(body,ueGroupId,subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modify an individual ee subscription of a UE
 *
 * body List 
 * ueId VarUeId UE id
 * subsId String 
 * no response value expected for this operation
 **/
exports.modifyEesubscription = function(body,ueId,subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a eeSubscription for a group of UEs or any UE
 *
 * ueGroupId VarUeGroupId 
 * subsId String Unique ID of the subscription to remove
 * no response value expected for this operation
 **/
exports.removeEeGroupSubscriptions = function(ueGroupId,subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a eeSubscription
 *
 * ueId VarUeId 
 * subsId String Unique ID of the subscription to remove
 * no response value expected for this operation
 **/
exports.removeeeSubscriptions = function(ueId,subsId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an individual ee subscription of a group of UEs or any UE
 *
 * ueGroupId VarUeGroupId 
 * subsId String 
 * body EeSubscription  (optional)
 * no response value expected for this operation
 **/
exports.updateEeGroupSubscriptions = function(ueGroupId,subsId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an individual ee subscriptions of a UE
 *
 * ueId VarUeId 
 * subsId String 
 * body EeSubscription  (optional)
 * no response value expected for this operation
 **/
exports.updateEesubscriptions = function(ueId,subsId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

