import { EventNode } from './EventNode';
export class Router {
    constructor() {
        this.root = [];
    }
    getEventNode() {
        return this.root;
    }
    addEvent(event, ...handlers) {
        this.root.push(new EventNode(event, ...handlers));
    }
    useEvent(event, EventRouter, separator = '/') {
        this.root = EventRouter.getEventNode();
        for (const index in this.root) {
            this.root[index].prependEventName(event, separator);
        }
    }
}
