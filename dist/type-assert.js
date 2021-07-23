"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username;
username = 'luixaviles';
// TS Trust in ME!
let message = username.length > 5
    ? `Welcome ${username}`
    : 'Sorry you need to sign up';
console.log('Length of username', message);
let userNameId = 'Luixaviles';
userNameId = userNameId.concat(' :D');
message = userNameId.substring(0, 4);
console.log(message);
