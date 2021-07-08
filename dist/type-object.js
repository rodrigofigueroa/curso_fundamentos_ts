"use strict";
var user;
user = {};
user = {
    id: 12.0,
    userName: 'Beat',
    userLastName: 'Shadow'
};
console.log('user', user);
// console.log('user', user.id ) // Error
var myUserObj;
myUserObj = Object;
myUserObj = {
    id: 12.0,
    userName: 'Beat',
    userLastName: 'Shadow'
};
// 
var otherObj = {
    other: 'one'
};
console.log(otherObj instanceof Object);
console.log(otherObj);
console.log('user.Name', myUserObj.userName);
