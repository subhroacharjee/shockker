import { Socket } from 'socket.io';
export type Next = (err?: any) => void;
export type Handler = (socket: Socket, data: any[], next?: Next) => void;
