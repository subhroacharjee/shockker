import { Socket } from 'socket.io';

export type Next = (err?: Error) => void;
export type Callback = (socket: Socket, data:any[]) => void;
export type MiddlewareCallback = ((socket: Socket, data:any[], next:Next) => void);
