"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.Picture = exports.Item = exports.User = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
var User = /** @class */ (function () {
    function User(nameUser, lastName) {
        this.nameUser = nameUser;
        this.lastName = lastName;
    }
    return User;
}());
exports.User = User;
var Item = /** @class */ (function () {
    function Item(id, title) {
        this.id = id;
        this.title = title;
    }
    return Item;
}());
exports.Item = Item;
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, size) {
        var _this = _super.call(this, id, title) || this;
        _this.size = size;
        return _this;
    }
    Picture.prototype.toString = function () {
        return "[{ id: " + this.id + ", title: " + this.title + ", size: " + this.size + " }]";
    };
    return Picture;
}(Item));
exports.Picture = Picture;
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this.pictures = [];
        return _this;
    }
    Album.prototype.addPictures = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}(Item));
exports.Album = Album;
