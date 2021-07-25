"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _size, _id_1, _title_1, _pictures;
Object.defineProperty(exports, "__esModule", { value: true });
var PictureSize;
(function (PictureSize) {
    PictureSize[PictureSize["Landscape"] = 0] = "Landscape";
    PictureSize[PictureSize["Square"] = 1] = "Square";
    PictureSize[PictureSize["Portrait"] = 2] = "Portrait";
})(PictureSize || (PictureSize = {}));
// If you want to use the # ti create private properties and methods you need to increase the ecmascript target to ES6
class Picture {
    constructor(id, title, size) {
        // Properties
        _id.set(this, void 0);
        _title.set(this, void 0);
        _size.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _size, size);
    }
    toString() {
        return `[{ id: ${__classPrivateFieldGet(this, _id)}, title: ${__classPrivateFieldGet(this, _title)}, size: ${__classPrivateFieldGet(this, _size)} }]`;
    }
}
_id = new WeakMap(), _title = new WeakMap(), _size = new WeakMap();
class Album {
    constructor(id, title) {
        // Properties
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    addPictures(picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    }
}
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
const album = new Album(1, 'Finn and Jake ALbum');
const picture = new Picture(1, 'Jake and Me', PictureSize.Landscape);
const picture2 = new Picture(2, 'Jake playing', PictureSize.Square);
album.addPictures(picture);
album.addPictures(picture2);
console.log('album', album);
// public
// picture2.id = 200  // Error // picture2.title = 'Another Title' // Error 
// album.id = 250 // Error // album.title = 'ANother xD album' // Error 
console.log('album', album);
console.log('album', picture2);
