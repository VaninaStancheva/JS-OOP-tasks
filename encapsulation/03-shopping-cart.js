class ShoppingCart {
    #items
    constructor(items = []) {
        this.#items = items;
    }

    get items() {
        return this.#items;
    }

    set addItem (item) {
        this.#items.push(item);
    }

    set removeItem (item) {
        const index = this.#items.indexOf(item);
        if (index > -1) { // only splice array when item is found
            this.#items.splice(index, 1); // 2nd parameter means remove one item only
        }
    }
}

const shoppingCart = new ShoppingCart();
console.log(`Sopping Cart 1: ${shoppingCart.items}`);
shoppingCart.addItem = 'shirt'
shoppingCart.addItem = 'trousers';
shoppingCart.addItem = 'shoes';
console.log(`Sopping Cart 1: ${shoppingCart.items}`);
shoppingCart.removeItem ="trousers";
console.log(`Sopping Cart 1: ${shoppingCart.items}`);

const shoppingCart2 = new ShoppingCart(['apples', 'bananas', 'tomatoes', 'peaches']);
console.log(`Sopping Cart 2: ${shoppingCart2.items}`);
shoppingCart2.addItem = 'milk';
shoppingCart2.addItem = 'meat';
console.log(`Sopping Cart 2: ${shoppingCart2.items}`);
shoppingCart2.removeItem = 'peaches';
console.log(`Sopping Cart 2: ${shoppingCart2.items}`);


