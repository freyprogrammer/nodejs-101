const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter {};

//Init Object
const freyEmitter = new MyEmitter;

//Event listener
freyEmitter.on('event', () => console.log('Event Fired!'));

//Init event
freyEmitter.emit('event');