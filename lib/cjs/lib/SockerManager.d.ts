import { Server } from 'http';
import { Router } from '@LIB/Router';
import { SocketMiddleware } from '@Types/Middlewares';
export declare class SockerManager {
    private httpServer;
    private socketServer;
    private events;
    private middlewares;
    private static _instance;
    constructor();
    static getInstance(): SockerManager;
    setHttpServer: (server: Server, options: any) => void;
    addMiddleware: (middleware: SocketMiddleware) => void;
    addRouter: (router: Router) => void;
    run: () => void;
    runWithoutServer: (port: string) => void;
    private _run;
    private next;
}
