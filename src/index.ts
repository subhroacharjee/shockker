import { Socket } from 'socket.io';
import { EventNode } from './lib/EventNode';

function main () {
	const eventNode = new EventNode('mock', (socket, data) => {
		console.log(data);
	}, (socket, data, next) => {
		console.log(data);
		console.log('End');
	});

	console.log(eventNode.getEvent() === 'mock');
	const nextClosure = eventNode.getNextClosure();
	let handler = nextClosure();
		while (handler !== null) {
			const sock = {} as Socket;
			handler(sock, [{
				data: 'Testing hola hola huuu'
			}]);
			handler = nextClosure();
		}
}
main();
