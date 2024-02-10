"use strict";
class Ceamra {
    constructor(zoom, filter) {
        this.zoom = zoom;
        this.filter = filter;
    }
    getFilter() {
        return this.filter;
    }
}
class phone extends Ceamra {
    constructor() {
        super("", "");
    }
    takePhoto() {
    }
}
