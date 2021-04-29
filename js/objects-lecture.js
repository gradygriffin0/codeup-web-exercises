"use strict";

// // OBJECTS - store data or functionality in a group under a name
//
// // CREATING AN OBJECT LITERAL
//
//     // var laptop = {
//     //     color: 'grey',
//     //     make: 'mac',
//     //     size: 13,
//     //     turnOn: function(){
//     //         return 'turn the computer on';
//     //     }
//     // };
//
// // NEW OBJECT INSTANCE
//     // var losSpurs = new Object();
//
// // // TODO create thisIsMe with both types of object creation;
// // var thisIsMe = {
// //     name: 'Grady',
// //     age: 21,
// //     height: 6.1,
// //     weight: 215,
// //     loveMemes: true
// // }
// // console.log(thisIsMe.height);
// //
// //
// // var thisIsMe2 = new Object();
// //
// // // dot notation Object.nameOfProperty = value
// //
// // thisIsMe2.height = 6.1;
// // thisIsMe2.weight = 215;
// // thisIsMe2.hasFeet = true;
// // console.log(`my weight is ${thisIsMe2.weight}`);
// //
// // // bracket notation - quotation inside bracket = value; **QUOTATION ALWAYS**
// // thisIsMe2["likeSpaghetti"] = true;
// // thisIsMe2["YearsDriving"] = 4
// // thisIsMe2["WeeksCoding"] = 3
// // console.log(thisIsMe2.likeSpaghetti);
//
// // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// // TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// // TODO: write a function that returns the sport and numOfPlayers from your 'team' object
//
// var yourFaveSportsTeam = {
//     city: "San Antonio",
//     coach: "Gregg Poppovich",
//     sport: "Basketball",
// }
// yourFaveSportsTeam["numOfPlayers"] = 30;
// yourFaveSportsTeam["numOfChampsWon"] = 5;
// yourFaveSportsTeam["isBestTeam"] = true;
//
// // function teamData(obj){
// //     var data = [];
// //     console.log(obj);
// //     console.log(obj.length);
// //     obj.forEach(function (property){
// //         console.log(property);
// //     });
// // }
// // console.log(teamData(yourFaveSportsTeam));
        // const books = [
        //     {
        //         "title": "Genetic Algorithms and Machine Learning for Programmers",
        //         "price": 36.99,
        //         "author": "Frances Buontempo"
        //     },
        //     {
        //         "title": "The Visual Display of Quantitative Information",
        //         "price": 38.00,
        //         "author": "Edward Tufte"
        //     },
        //     {
        //         "title": "Practical Object-Oriented Design",
        //         "author": "Sandi Metz",
        //         "price": 30.47
        //     },
        //     {
        //         "title": "Weapons of Math Destruction",
        //         "author": "Cathy O'Neil",
        //         "price": 17.44
        //     }
        // ]
        //
        // function highestPriceBook(input){
        //     var highestBook = input.sort(function (a,b){
        //         return b.price - a.price;
        //         console.log(highestBook)
        //     });
        //     for(let i = 0; i < input.length; i++){
        //
        //         if(input[i].price === highestBook){
        //             return input[i];
        //         }
        //     }
        //
        // }
        // highestPriceBook(books);

var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
}
// console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.
console.log(theSpurs.otherNBATeams.Jazz.mascot);
console.log(theSpurs.otherNBATeams.Pistons.mascot);
console.log(theSpurs.otherNBATeams.Mavs.mascot);
theSpurs.playerInfo[1].name = "Ginobili";
console.log(theSpurs.playerInfo);
console.log(theSpurs.players[2]);
theSpurs.otherNBATeams.Rockets = {
    city: "Houston",
    mascot: "Rockets",
    champsWon: "Idk"
};
console.log(theSpurs.otherNBATeams);
/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/
var zoo = {
    name: "Griffin Zoo",
    city: "San Antonio",
    isOpen: false,
    ranking: -Infinity,
    yearOpened: 2021,
    animals: [

         {  name: "giraffe",
            isTall: true,
            isMammal: true,
            canFly: false,
            sound: "ooga Ooga",
            animalSound: function(){
                return this.sound;
            }
        },
        {   name: "Doge",
            isMeme: true,
            isMammal: true,
            canFly: false,
            sound: "Wow, many thank",
            animalSound: function() {
                return this.sound;
            }
        },
         {  name: "Penguin",
            isCold: true,
            isMammal: false,
            canFly: false,
            sound: "wamhp wamhp wamhp",
            animalSound: function() {
                return this.sound;
            }
        },
         {  name: "Monke",
            isMeme: true,
            isMammal: true,
            canFly: false,
            sound: "ree ree ree",
            animalSound: function () {
                return this.sound;
            }
        },
         {  name: "TREX",
            isTall: true,
            isMammal: false,
            canFly: false,
            sound: "RAAAWR",
            animalSound: function () {
                return this.sound;
            }
        },
    ]
};
console.log(`Welcome to ${zoo.name}`);

for (let i = 0; i < zoo.animals.length; i++){


    console.log(`This is a ${zoo.animals[i].name}, *The ${zoo.animals[i].name} "${zoo.animals[i].animalSound()}s" at you*`);
}
