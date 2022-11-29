import { Handler } from '@Types/Handlers';
export declare class EventNode {
    private event;
    private handlers;
    constructor(event: string, ...handlers: Handler[]);
    prependEventName: (prefix: string, separator?: string) => void;
    getNextHandler(): Generator<Handler, void, unknown>;
    getEvent: () => string;
}
