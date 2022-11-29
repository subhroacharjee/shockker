import {expect, jest, test} from '@jest/globals';
import { EventNode } from '../../src/lib/EventNode';
import { Router } from '../../src/lib/Router';

const mockRouter = new Router();

test('Testing structre of Router', () => {
	expect(Reflect.has(mockRouter, 'root')).toBeTruthy();
	expect(Reflect.has(mockRouter, 'addEvent')).toBeTruthy();
	expect(Reflect.has(mockRouter, 'useEvent')).toBeTruthy();
	
	expect(typeof Reflect.get(mockRouter, 'root') === 'object').toBeTruthy();
});

test('Testing addition of events', () => {
	mockRouter.addEvent('mock-1', (socket: any, data: any) => {
		console.log(data);
		
	});

	const listOfevents:EventNode[] = Reflect.get(mockRouter, 'root');
	expect(listOfevents.length).toBe(1);
	expect(listOfevents[0].getEvent()).toBe('mock-1');
});