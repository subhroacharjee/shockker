import { Callback } from '@Types/Callback';
import { Handler } from '@Types/Handlers';
import { EventNode } from './EventNode';

export class Router {
	private root: EventNode[];
	
	constructor() {
		this.root = [];
	}

	public event = (event: string, ...handlers: Handler[]) => {
		this.root.push(new EventNode(event, ...handlers));
	};

	
}