import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
export declare type Next = (err?: Error) => void;
export declare type Callback = (socket: Socket, data: any[]) => void;
export declare type MiddlewareCallback = ((socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, data: any[], next: Next) => void);
