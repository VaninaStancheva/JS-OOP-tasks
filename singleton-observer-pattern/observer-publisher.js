class Publisher {
    constructor() {
        // Initialize an empty array to hold observers
        this.observers = [];
        // Initialize the post to 0
        this.posts = 0;
    }

    // Method to add an observer to the list
    addObserver(observer) {
        this.observers.push(observer);
    }
    // Method to remove an observer from the list
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    // Method to set the number of posts and notify the observers
    setPosts(posts) {
        this.posts = posts;
        this.notifyObservers();
    }
    // Method to notify all the observers for the change.
    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this.posts);
        })
    }
}

// Define a Subscriber class
class Subscriber {
    constructor(name) {
        this.subscriberName = name;
    }

    // Method called when the number of posts is updated
    update(posts) {
        // Log a message indicating the change.
        console.log(`${this.subscriberName} can view new ${posts} posts`);
    }
}

const publisher = new Publisher();

const subscriber1 = new Subscriber('Pesho');
const subscriber2 = new Subscriber('Gosho');
const subscriber3 = new Subscriber('Batman');

publisher.addObserver(subscriber1);
publisher.addObserver(subscriber2);
publisher.addObserver(subscriber3);

publisher.setPosts(10);
publisher.setPosts(5);

publisher.removeObserver(subscriber2);
publisher.setPosts(15);

