"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 0] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 1] = "Portrait";
    PictureOrientation[PictureOrientation["Small"] = 2] = "Small";
    PictureOrientation[PictureOrientation["Desktop"] = 3] = "Desktop";
})(PictureOrientation || (PictureOrientation = {}));
var album = {
    id: 1,
    title: 'Meetings',
    description: 'My meetings around the world'
};
var picture = {
    id: 2,
    title: 'My Little Cat',
    size: PictureOrientation.Landscape
};
var myNePicture = {
    id: 3,
    title: 'Other one',
    size: PictureOrientation.Portrait
};
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', myNePicture);
