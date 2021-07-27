"use strict";
// import { Album, PhotoOrientation, Picture, User } from './photo-app'
Object.defineProperty(exports, "__esModule", { value: true });
const photo_orientation_1 = require("./photo-orientation");
const album_1 = require("./album");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User('Luffy', 'Monkey D.');
const album = new album_1.Album(1, 'Luffy and old guy');
const picture = new picture_1.Picture(1, 'Luffy vs Everything in jail', photo_orientation_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPictures(picture);
// console.log( 'user', user ,'album', album, 'Picture' ,picture )
console.log('user1', user);
user.deleteAlbum(album);
console.log('user', user);
