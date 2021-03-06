"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureLandscape;
(function (PictureLandscape) {
    PictureLandscape[PictureLandscape["small"] = 0] = "small";
    PictureLandscape[PictureLandscape["portrait"] = 1] = "portrait";
    PictureLandscape[PictureLandscape["desktop"] = 2] = "desktop";
})(PictureLandscape || (PictureLandscape = {}));
console.log(PictureLandscape);
// Withour Interface
function showPicture(picture) {
    console.log(`title: ${picture.title}, date: ${picture.date}  Size: ${picture.size}`);
}
// Function with Interface
function showPictureWithInterface(picture) {
    console.log(`title: ${picture.title}, date: ${picture.date}  Size: ${picture.size}`);
}
const pic = {
    title: 'Brithdays',
    date: '15/24/2020',
    size: PictureLandscape.small
};
showPicture(pic);
showPicture({ title: 'My weeding', date: '12/5/2020', size: PictureLandscape.desktop });
function createPicture3(conf) {
    const info = { title: 'Default', date: '10-12-2020' };
    if (conf.title) {
        info.title = conf.title;
    }
    if (conf.date) {
        info.date = conf.date;
    }
    return info;
}
console.log(createPicture3({}));
console.log(createPicture3({ title: 'My Master', date: '01-2-2021' }));
let user;
user = {
    id: 12,
    name: 'Lux',
    isPro: true
};
console.log('user', user);
user.name = 'paparazzi';
console.log('user', user);
// user.id = 300 Can't be we use readonly
// user.id = 300 // error
console.log('user', user);
