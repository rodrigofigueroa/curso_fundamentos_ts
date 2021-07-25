"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User('Luffy', 'Monkey D.');
var album = new photo_app_1.Album(1, 'Luffy and old guy');
var picture = new photo_app_1.Picture(1, 'Luffy vs Everything in jail', photo_app_1.PhotoOrientation.Landscape);
album.addPictures(picture);
console.log('user', user, 'album', album, 'Picture', picture);
