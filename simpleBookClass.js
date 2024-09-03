class Book {
    constructor (title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    getSummary() {
        const summery = `${this.title}, ${this.author}, ${this.yearPublished}`;
        console.log(summery)
    }
}

const bookOne = new Book ('FirstBook', 'First Author', '2024');
const bookTwo = new Book ('SecondBook', 'Second Author', '2011');

bookOne.getSummary();
bookTwo.getSummary();
