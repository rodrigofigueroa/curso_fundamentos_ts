"use strict";
var oneNull = null;
// oneNull = 'all' // Error
var anotherNull = null;
anotherNull = 'This is a null string';
var undefinedVariable = undefined;
// undefinedVariable = '' //Error
var anotherUndefinedVariable = undefined;
anotherUndefinedVariable = 'undefined string';
// --strictNullChecks
var strictCheck = '';
// strictCheck = null       // Error
// strictCheck = undefined  // Error
