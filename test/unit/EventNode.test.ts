import {expect, jest, test} from '@jest/globals';
import { Socket } from 'socket.io';
import { EventNode } from '../../src/lib/EventNode';
import { Callback } from '../../src/Types/Callback';

const mockHandler:Callback = (socket: Socket, data:any[]) => {
	console.log(data);
};

const mockEventNode = new EventNode('mock', mockHandler);

test('Testing eventNode structure',() => {
	
	expect(Reflect.has(mockEventNode, 'event')).toBeTruthy();
	expect(Reflect.has(mockEventNode, 'handlers')).toBeTruthy();
});

test('Testing event name', () => {
	expect(mockEventNode.getEvent()).toBe('mock');
});

test('Testing event handlers', () => {
	const handler = mockEventNode.getNextHandler().next();
	expect(handler.value).toBe(mockHandler);

	expect(mockEventNode.getNextHandler().next().done).toBeFalsy();

});