"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const EventNode_1 = require("./EventNode");
class Router {
    constructor() {
        this.root = [];
    }
    getEventNode() {
        return this.root;
    }
    addEvent(event, ...handlers) {
        this.root.push(new EventNode_1.EventNode(event, ...handlers));
    }
    useEvent(event, EventRouter, separator = '/') {
        this.root = EventRouter.getEventNode();
        for (const index in this.root) {
            this.root[index].prependEventName(event, separator);
        }
    }
}
exports.Router = Router;
