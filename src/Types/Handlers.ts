import { Callback, ErrorCallBack, MiddlewareCallback } from './Callback';

export type Handler = Callback | ErrorCallBack | MiddlewareCallback