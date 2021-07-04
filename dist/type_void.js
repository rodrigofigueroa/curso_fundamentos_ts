"use strict";
function showInfo(user) {
    console.log(user.id, user.nameUser);
}
showInfo({ id: 12, nameUser: 'rod' });
function showInfo2(user) {
    console.log(user.id, user.nameUser);
}
showInfo2({ id: 12, nameUser: 'rod' });
// let checkVoid: void
//     checkVoid = null
//     checkVoid = undefined
function erros(id, message) {
    throw new Error(message + " id: " + id);
}
try {
    erros(404, 'Not Found :(');
}
catch (e) {
    console.log(e);
}
