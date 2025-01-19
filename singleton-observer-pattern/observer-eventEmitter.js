class EventEmitter {
    constructor () {
        this.events = {};
    }

    addEvent(eventName) {
        if (this.events[eventName]) {
            return;
        }
        this.events[eventName] = [];
    }

    removeEvent(eventName) {
        if (!this.events[eventName]) {
            throw new Error(`Event ${eventName} does not exist`);
        } else {
            delete this.events[eventName];
        }
    }

    eventSubscribe (eventName, subscriberName) {
        if (!this.events[eventName]) {
            throw new Error(`Event ${eventName} does not exist.`);
        }
        this.events[eventName].push(subscriberName);
    }

    eventUnsubscribe (eventName, subscriberName) {
        if (!this.events[eventName]) {
            throw new Error(`Event ${eventName} does not exist.`);
        }

        this.events[eventName] = this.events[eventName] .filter(subscriber => subscriber !== subscriberName);
    }

    getInfoEvents () {
        return this.events;
    }
}

const eventEmitter = new EventEmitter();
eventEmitter.addEvent('firstEvent1');
eventEmitter.addEvent('firstEvent2');
eventEmitter.addEvent('firstEvent3');
eventEmitter.eventSubscribe('firstEvent1', 'subscriber1');
eventEmitter.eventSubscribe('firstEvent1', 'subscriber2');
eventEmitter.eventSubscribe('firstEvent2', 'subscriber3');
eventEmitter.eventSubscribe('firstEvent3', 'subscriber4');
console.log(eventEmitter.getInfoEvents());
eventEmitter.eventUnsubscribe('firstEvent1', 'subscriber1');
console.log(eventEmitter.getInfoEvents());
eventEmitter.eventUnsubscribe('firstEvent4', 'subscriber2');
eventEmitter.removeEvent('firstEvent3');
console.log(eventEmitter.getInfoEvents());

