// events

const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Add an event listener
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the event
emitter.emit('greet', 'Alice');  // Outputs: Hello, Alice!

// Add a one-time listener
emitter.once('welcome', () => {
    console.log('Welcome event triggered once.');
});

// Emit the 'welcome' event twice (only the first one will be logged)
emitter.emit('welcome');
emitter.emit('welcome');  // Outputs: Welcome event triggered once.