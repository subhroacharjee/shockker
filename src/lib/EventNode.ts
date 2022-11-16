import { Handler } from '@Types/Handlers';

export class EventNode {
	private event: string;
	private handlers: Handler[];

	constructor(event: string, ...handlers: Handler[]) {
		this.event = event;
		this.handlers = handlers;
	}

	public prependEventName = (prefix: string, separator = '-') => {
		this.event = prefix + separator + this.event;
	};

	public* getNextHandler() {
		for (let i = 0; i < this.handlers.length; i++) {
			yield this.handlers[i];
		}
	}

	public getEvent = () => {
		return this.event;
	};
}