"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SockerManager = void 0;
const socket_io_1 = require("socket.io");
const http_1 = require("http");
class SockerManager {
    constructor() {
        this.httpServer = null;
        this.events = [];
        this.middlewares = [];
        this.setHttpServer = (server, options) => {
            this.httpServer = server;
            this.socketServer = new socket_io_1.Server(this.httpServer, options);
        };
        this.addMiddleware = (middleware) => {
            this.middlewares.push(middleware);
        };
        this.addRouter = (router) => {
            const events = router.getEventNode();
            for (const index in events) {
                this.events.concat(events[index]);
            }
        };
        this.run = () => {
            if (!this.httpServer)
                throw new Error('No server is attached!');
            this._run();
        };
        this.runWithoutServer = (port) => {
            this.httpServer = (0, http_1.createServer)((req, res) => {
                res.end();
            });
            this.httpServer.listen(port);
            this._run();
        };
        this._run = () => {
            for (const idx in this.middlewares) {
                const midware = this.middlewares[idx];
                this.socketServer.use(midware);
            }
            this.socketServer.on('connection', (socket) => {
                for (const idx in this.events) {
                    const node = this.events[idx];
                    socket.on(node.getEvent(), (data) => {
                        this.next(socket, data, node.getNextHandler());
                    });
                }
            });
        };
        this.next = (socket, data, iterator) => {
            return (err) => {
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
        if (!SockerManager._instance) {
            SockerManager._instance = this;
        }
    }
    static getInstance() {
        return SockerManager._instance;
    }
}
exports.SockerManager = SockerManager;
SockerManager._instance = new SockerManager();
