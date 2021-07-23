"use strict";
let oneNull = null;
// oneNull = 'all' // Error
let anotherNull = null;
anotherNull = 'This is a null string';
let undefinedVariable = undefined;
// undefinedVariable = '' //Error
let anotherUndefinedVariable = undefined;
anotherUndefinedVariable = 'undefined string';
// --strictNullChecks
let strictCheck = '';
// strictCheck = null       // Error
// strictCheck = undefined  // Error
