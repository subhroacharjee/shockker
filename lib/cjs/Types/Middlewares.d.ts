import { Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';
export declare type SocketMiddleware = (socket: Socket, next: (err?: ExtendedError) => void) => void;
