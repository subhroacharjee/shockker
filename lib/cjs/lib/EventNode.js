"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNode = void 0;
class EventNode {
    constructor(event, ...handlers) {
        this.prependEventName = (prefix, separator = '-') => {
            this.event = prefix + separator + this.event;
        };
        this.getEvent = () => {
            return this.event;
        };
        this.event = event;
        this.handlers = handlers;
    }
    *getNextHandler() {
        for (let i = 0; i < this.handlers.length; i++) {
            yield this.handlers[i];
        }
    }
}
exports.EventNode = EventNode;
