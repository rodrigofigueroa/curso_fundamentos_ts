"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureSize;
(function (PictureSize) {
    PictureSize[PictureSize["Landscape"] = 0] = "Landscape";
    PictureSize[PictureSize["Square"] = 1] = "Square";
    PictureSize[PictureSize["Portrait"] = 2] = "Portrait";
})(PictureSize || (PictureSize = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, size) {
        this.id = id;
        this.title = title;
        this.size = size;
    }
    Picture.prototype.toString = function () {
        return "[{ id: " + this.id + ", title: " + this.title + ", size: " + this.size + " }]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPictures = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'Finn and Jake ALbum');
var picture = new Picture(1, 'Jake and Me', PictureSize.Landscape);
var picture2 = new Picture(2, 'Jake playing', PictureSize.Square);
album.addPictures(picture);
album.addPictures(picture2);
console.log('album', album);
