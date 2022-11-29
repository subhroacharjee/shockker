import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export type Next = (err?: Error) => void;
export type Callback = (socket: Socket, data:any[]) => void;
export type MiddlewareCallback = ((socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, data:any[], next:Next) => void);
