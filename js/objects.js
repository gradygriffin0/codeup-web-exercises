(function() {
    "use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
var person = {
    firstName: "Grady",
    lastName: "Griffin",
    sayHello: function(){
        return `Hello from ${person.firstName} ${person.lastName}!`;
    }
}
    console.log(person.sayHello());
/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];
    // function hebDiscount(){
    //     for (let i = 0; i < shoppers.length; i++){
    //         if (shoppers[i].amount > 200){
    //             console.log(`${shoppers[i].name}, for spending more than ${200}$ you receive a discount of 12%, brining your total to ${shoppers[i].amount * (1-.12)}$`);
    //         } else {
    //             console.log(`${shoppers[i].name}, your total is ${shoppers[i].amount}$`);
    //         }
    //     }
    // }
    // hebDiscount();

    function hebDiscount(){
        shoppers.forEach(function (shopper){
            if (shopper.amount > 200){
                console.log(`${shopper.name}, for spending more than ${200}$ you receive a discount of 12%, brining your total to ${shopper.amount * (1-.12)}$`);
            } else {
                console.log(`${shopper.name}, your total is ${shopper.amount}$`);
            }
        });
    }
    hebDiscount();
/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
var books = [
    {
        name: "Zero to One",
        author: {
            authorFirst: "Peter",
            authorLast: "Thiel"
        }
    },
    {
        name: "How to Win Friends and Influence People",
        author: {
            authorFirst: "Dale",
            authorLast: "Carnegie"
        }
    },
    {
        name: "Mindset: The New Psychology of Success",
        author: {
            authorFirst: "Carol",
            authorLast: "Dweck"
        }
    },
    {
        name: "Wisdom from Rich Dad, Poor Dad",
        author: {
            authorFirst: "Robert",
            authorLast: "Kiyosaki"
        }
    },
    {
        name: "You Are a Badass",
        author: {
            authorFirst: "Jen",
            authorLast: "Sincero"
        }
    }
];

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
// function bookPreview(){
//     for (let i = 0; i < books.length; i++){
//         console.log(`Book #${[i+1]}`);
//         console.log(`Title: ${books[i].name}`);
//         console.log(`Author: ${books[i].author.authorFirst} ${books[i].author.authorLast}`)
//         console.log("------------------------")
//     }
// }
// bookPreview();
/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
function createBook(title, author){
    var firstLast = author.split(" ", 2);
    var newBook = {
        name: title,
        author: {
            authorFirst: firstLast[0],
            authorLast: firstLast[1]
        }
    }
    books.push(newBook);
    return newBook;
}
    function bookPreview(bookName) {
    var bookCheck;
        if(!!bookName || typeof bookName === 'string') {
            for (let i = 0; i < books.length; i++){
                if (bookName.toLowerCase() === books[i].name.toLowerCase()){
                    bookCheck = true;
                    if (bookCheck){
                        console.log(`We Have ${books[i].name}, here is a preview:`);
                        console.log("------------------------");
                        console.log(`Book #${[i+1]}`);
                        console.log(`Title: ${books[i].name}`);
                        console.log(`Author: ${books[i].author.authorFirst} ${books[i].author.authorLast}`);
                        console.log("------------------------");
                        return;
                    } else {
                        console.log("I couldn't find " + bookName);
                        console.log("Here are our books:");
                    }
                }
            }
        }

        for (let i = 0; i < books.length; i++){
            console.log(`Book #${[i+1]}`);
            console.log(`Title: ${books[i].name}`);
            console.log(`Author: ${books[i].author.authorFirst} ${books[i].author.authorLast}`)
            console.log("------------------------")
        }
    }
    // bookPreview("you are a badass");

    // bookPreview();

    bookPreview("Grady's Book");

    createBook("Grady's Book", "Grady Griffin");

    bookPreview("Grady's Book");



})();