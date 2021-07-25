"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureSize;
(function (PictureSize) {
    PictureSize[PictureSize["Landscape"] = 0] = "Landscape";
    PictureSize[PictureSize["Square"] = 1] = "Square";
    PictureSize[PictureSize["Portrait"] = 2] = "Portrait";
})(PictureSize || (PictureSize = {}));
class Picture {
    constructor(id, title, size) {
        this.id = id;
        this.title = title;
        this.size = size;
    }
    toString() {
        return `[{ id: ${this.id}, title: ${this.title}, size: ${this.size} }]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPictures(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Finn and Jake ALbum');
const picture = new Picture(1, 'Jake and Me', PictureSize.Landscape);
const picture2 = new Picture(2, 'Jake playing', PictureSize.Square);
album.addPictures(picture);
album.addPictures(picture2);
console.log('album', album);
// public
// picture2.id = 200  // Error Private
// picture2.title = 'Another Title' // Error Private
// album.id = 250 // Error Private
// album.title = 'ANother xD album' // Error Private
console.log('album', album);
console.log('album', picture2);
