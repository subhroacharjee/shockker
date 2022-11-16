import {
	Socket,
	Server as SocketServer
} from 'socket.io';

import {
	Server
} from 'http';
import { Router } from '@LIB/Router';
import { EventNode } from '@LIB/EventNode';
import { Handler } from '@Types/Handlers';
import { SocketMiddleware } from '@Types/Middlewares';

export class SockerManager {
	private httpServer!: Server;
	private socketServer!: SocketServer;
	private events: EventNode[] = [];
	private middlewares: SocketMiddleware[] = [];

	private static _instance: SockerManager = new SockerManager();

	constructor() {
		if (!SockerManager._instance) {
			SockerManager._instance = this;
		}
	}

	public static getInstance(): SockerManager {
		return SockerManager._instance;
	}

	public setHttpServer = (server: Server, options:any) => {
		this.httpServer = server;
		this.socketServer = new SocketServer(this.httpServer, options);
	};

	public addMiddleware = (middleware:SocketMiddleware) => {
		this.middlewares.push(middleware);
	};

	public addRouter = (router: Router) => {
		const events = router.getEventNode();
		for (const index in events){

			this.events.concat(events[index]);
		}
	};

	public run = () => {
		for(const idx in this.middlewares) {
			const midware = this.middlewares[idx];
			this.socketServer.use(midware);
		}
		this.socketServer.on('connection', (socket) => {

			for (const idx in this.events) {
				const node = this.events[idx];
				socket.on(node.getEvent(), (data:any[]) => {
					this.next(socket, data, node.getNextHandler());
				});
			}
		});
	};

	private next = (socket:Socket, data:any[], iterator: Generator<Handler, void, unknown>) => {
		return (err?:Error) => {
			if (err) {
				socket.emit('_error', err);
				return;
			}

			const handler = iterator.next().done ? null : iterator.next().value;
			if (handler) {
				handler(socket, data, this.next(socket, data, iterator));
			}
		};
	};
}