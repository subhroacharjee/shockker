import { Handler } from '../types'

/**
 * TODO:
 * - add jest test cases for eventNode
 * - make router class.
 */
export class EventNode {
	/**
		 * This is the most basic part of the wrapper. This will not be available to user directly,
		 * though all the events will be handled and managed by this only.
		 * Each object will have `event` which basically signifies the event that needs to be handled by this object
		 * and handlers are the list of middlewares and callbacks for this particular event.
		 */
	private event: string
	private readonly handlers: Handler[]

	constructor (event: string, ...handlers: Handler[]) {
		this.event = event
		this.handlers = handlers
	}

	public getEvent = (): string => this.event

	public getHandlers = (): Handler[] => this.handlers

	/**
	   * so why do we need this function?
	   * In Router object we want to add a router in itself what this function will do is,
	   * it will take the main routers event and set prefix to all the child routers node.
	   *
	   * @param {string}prefix
	   */
	public setPrefix = (prefix: string): void => {
		this.event = prefix + this.event
	}

	/**
	   * This function returns another function which is basically a iterator over handlers.
	   * We require this function so that when handling a Next function we can use this.
	   * @returns {Handler | null}
	   */
	public getNextClosure = () => {
		let idx = 0
		const limit = this.handlers.length
		return (err?: any): Handler | null => {
			if (idx < limit && typeof err === 'undefined') {
				return this.handlers[idx++]
			}
			return null
		}
	}
}

	public getEvent = () => {
		return this.event;
	};
}