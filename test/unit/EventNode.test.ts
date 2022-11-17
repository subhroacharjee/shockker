import {expect, jest, test} from '@jest/globals';
import { Socket } from 'socket.io';
import { EventNode } from '../../src/lib/EventNode';
import { Handler } from '../../src/Types/Handlers';

const mockHandler:Handler = (socket: Socket, data:any[]) => {
	console.log(data);
};

const mockEventNode = new EventNode('mock', mockHandler);

test('Testing eventNode structure',() => {
	
	expect(Reflect.has(mockEventNode, 'event')).toBeTruthy();
	expect(Reflect.has(mockEventNode, 'handlers')).toBeTruthy();
});