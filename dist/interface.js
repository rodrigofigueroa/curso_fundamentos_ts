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
    console.log("title: " + picture.title + ", date: " + picture.date + "  Size: " + picture.size);
}
// Function with Interface
function showPictureWithInterface(picture) {
    console.log("title: " + picture.title + ", date: " + picture.date + "  Size: " + picture.size);
}
var pic = {
    title: 'Brithdays',
    date: '15/24/2020',
    size: PictureLandscape.small
};
showPicture(pic);
showPicture({ title: 'My weeding', date: '12/5/2020', size: PictureLandscape.desktop });
