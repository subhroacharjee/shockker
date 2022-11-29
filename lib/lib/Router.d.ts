import { Handler } from '@Types/Handlers';
import { EventNode } from './EventNode';
export declare class Router {
    private root;
    getEventNode(): EventNode[];
    constructor();
    addEvent(event: string, ...handlers: Handler[]): void;
    useEvent(event: string, EventRouter: Router, separator?: string): void;
}
