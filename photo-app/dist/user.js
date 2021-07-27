"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(nameUser, lastName) {
        this.nameUser = nameUser;
        this.lastName = lastName;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    deleteAlbum(albumDelete) {
        const index = this.album.findIndex(i => i.id === albumDelete.id);
        let deleteItem;
        if (index >= 0) {
            deleteItem = this.album.splice(index, 1);
        }
        return deleteItem;
    }
}
exports.User = User;
