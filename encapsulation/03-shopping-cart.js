/**
 * Represents a shopping cart with a list of items.
 */
class ShoppingCart {
    // Private property to store items in the cart.
    #items
    /**
     * Initialize the ShoppingCart instance with an optional list of items.
     * @param {Array} items - An optional initial array of items.
     */
    constructor(items = []) {
        this.#items = items; // Assign the initial items to the private #items property.
    }
    /**
     * Get the list of items in the shopping cart.
     * @returns {Array} The current list of items in the cart.
     */
    get items() {
        return this.#items;
    }
    /**
     * Add an item to the shopping cart.
     * @param {any} item - The item to add to the cart.
     */
    set addItem (item) {
        this.#items.push(item); // Add the item to the #items array.
    }
    /**
     * Remove an item from the shopping cart if it exists.
     * @param {any} item - The item to remove from the cart.
     */
    set removeItem (item) {
        const index = this.#items.indexOf(item); // Find the index of the item.
        if (index > -1) {
            this.#items.splice(index, 1); // Remove the item if it exists.
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


