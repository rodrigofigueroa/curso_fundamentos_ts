"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureSize;
(function (PictureSize) {
    PictureSize[PictureSize["Landscape"] = 0] = "Landscape";
    PictureSize[PictureSize["Square"] = 1] = "Square";
    PictureSize[PictureSize["Portrait"] = 2] = "Portrait";
})(PictureSize || (PictureSize = {}));
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id( id: number ){
    //   this._id = id
    // }
    get title() {
        return this._title;
    }
}
class Picture extends Item {
    constructor(id, title, size) {
        super(id, title);
        this._size = size;
    }
    get size() {
        return this._size;
    }
    set size(s) {
        this._size = s;
    }
    toString() {
        return `[{ id: ${this.id}, title: ${this.title}, size: ${this.size} }]`;
    }
}
// Properties
Picture.pictureOrien = PictureSize;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
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
// picture2.id = 200  // Error for readonly
// picture2.title = 'Another Title' // Error for readonly
// album.id = 250 // Works because of get
//album.title = 'ANother xD album' // Error for readonly
console.log('album', album);
console.log('album', picture2);
// const item: Item = new Item(1, 'New item !') // erro for abstract class it can't instanciate object
// console.log( 'items',item ) 
console.log('Picture Orientation', Picture.pictureOrien.Portrait);
