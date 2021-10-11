export class UrlMaker {
    constructor(url) {
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "qm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.url = url;
        this.qm = false;
    }
    static from(url) {
        return new UrlMaker(url);
    }
    add(name, value, def) {
        if (def !== undefined && def === value) {
            return this;
        }
        if (value === undefined || value === null) {
            return this;
        }
        if (!this.qm) {
            this.url += '?';
            this.qm = true;
        }
        else {
            this.url += '&';
        }
        this.url += name;
        this.url += '=';
        this.url += value;
        return this;
    }
    toString() {
        return this.url;
    }
}
//# sourceMappingURL=url2.js.map