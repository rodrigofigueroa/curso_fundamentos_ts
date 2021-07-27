"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
class Picture extends item_1.Item {
    constructor(id, title, size) {
        super(id, title);
        this.size = size;
    }
    toString() {
        return `[{ id: ${this.id}, title: ${this.title}, size: ${this.size} }]`;
    }
}
exports.Picture = Picture;
