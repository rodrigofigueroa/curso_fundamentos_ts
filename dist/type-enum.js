"use strict";
// const landscape = 0
// const portrait  = 1
// const square    = 2
// const panorama  = 3
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
// console.log(  landscape )
var PictueOrientation;
(function (PictueOrientation) {
    PictueOrientation[PictueOrientation["Landscape"] = 0] = "Landscape";
    PictueOrientation[PictueOrientation["Portrait"] = 1] = "Portrait";
    PictueOrientation[PictueOrientation["Square"] = 2] = "Square";
    PictueOrientation[PictueOrientation["Panorama"] = 3] = "Panorama";
})(PictueOrientation || (PictueOrientation = {}));
// console.log(  PictueOrientation.Portrait )
var PictueOrientation2;
(function (PictueOrientation2) {
    PictueOrientation2[PictueOrientation2["Landscape"] = 10] = "Landscape";
    PictueOrientation2[PictueOrientation2["Portrait"] = 11] = "Portrait";
    PictueOrientation2[PictueOrientation2["Square"] = 12] = "Square";
    PictueOrientation2[PictueOrientation2["Panorama"] = 13] = "Panorama";
})(PictueOrientation2 || (PictueOrientation2 = {}));
// console.log( PictueOrientation2.Square );
var Countries;
(function (Countries) {
    Countries["Mexico"] = "mex";
    Countries["Colombia"] = "col";
    Countries["EEUU"] = "usa";
    Countries["Canada"] = "can";
})(Countries || (Countries = {}));
var country = Countries.Canada;
console.log(country);
