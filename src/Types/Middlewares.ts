import { Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';
import { Next } from './Callback';

export type SocketMiddleware = (socket: Socket, next: (err?:ExtendedError) => void) => void;