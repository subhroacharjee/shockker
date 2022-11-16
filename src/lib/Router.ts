import { Handler } from '@Types/Handlers';
import { EventNode } from './EventNode';

export class Router {
	private root: EventNode[];

	public getEventNode = () => {
		return this.root;
	};
	
	constructor() {
		this.root = [];
	}

	public addEvent = (event: string, ...handlers: Handler[]) => {
		this.root.push(new EventNode(event, ...handlers));
	};

	public useEvent = (event: string, EventRouter: Router, separator = '/') => {
		this.root = EventRouter.getEventNode();

		for (const index in this.root) {
			this.root[index].prependEventName(event, separator);
		}
	};
	
}