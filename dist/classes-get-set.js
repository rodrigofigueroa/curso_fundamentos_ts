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
var _title_1;
Object.defineProperty(exports, "__esModule", { value: true });
var PictureSize;
(function (PictureSize) {
    PictureSize[PictureSize["Landscape"] = 0] = "Landscape";
    PictureSize[PictureSize["Square"] = 1] = "Square";
    PictureSize[PictureSize["Portrait"] = 2] = "Portrait";
})(PictureSize || (PictureSize = {}));
class Picture {
    constructor(id, title, size) {
        _title_1.set(this, void 0);
        this._id = id;
        __classPrivateFieldSet(this, _title_1, title);
        this._size = size;
        console.log(__classPrivateFieldGet(this, _title_1));
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return __classPrivateFieldGet(this, _title_1);
    }
    set title(title) {
        __classPrivateFieldSet(this, _title_1, title);
        console.log(__classPrivateFieldGet(this, _title_1));
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
_title_1 = new WeakMap();
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(t) {
        this._title = t;
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
picture2.id = 200; // Works because if the get
picture2.title = 'Another Title'; // Works because of set
album.id = 250; // Works because of get
album.title = 'ANother xD album'; // Works because of set
console.log('album', album);
console.log('album', picture2);
