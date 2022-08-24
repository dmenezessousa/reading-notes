Class 06 - Object and the The DOM

JS fundamentals: Objects

Objects in javascript are like complex data type entities, while the array is a storage container for many data types, the Object is a single data types, that stores many types of data.

bracket notation, lets us use expressions to read values.

let person = {
name:"jacob",
age: 31,
hobbies: [game, movies]
}

let key = 'name';

console.log(person.key)
or use .objValue
console.log(person.name)

Functions in Objs are called methods
information in an obj , is stored using key value pairs

JS API (application programming interface): The DOM

The DOM uses a method called CRUD

C = Create
R = Read
U = Update
D = Delete

Lab Prep: Salmon Cookies

Main goal: calculate the average number of cookies sales per hour per store

think of each store as an object
what are the store hours
for a single hour, generate the number of sales using , min/ max customers per hour average cookie salaes per sustomer
for each store get an array of cookie sale data for each hour the sotre is open.

-----------------------------------------------------

Learning Journal 07

Class 07 - constructor & html tables

JS constructor functions

Object  => storage containers for key value pairs, 
Construcor function are functions that create objects the function defines the shape (properties of the obj).
The parameters represent the values.



function pokemon(name, health,abilities){
    this.name = name;
    this.health = health;
    this abilities = abilities
};

pokemon.protoype.attack = 100;
pokemon.prototype.speak = function(){
    console.log(this.name + '!!!!!!!');
}

let pokemon = new pokemon = ('jacob', 100, ["teaching]);
pokemon.speak


HTML TABLES

TH - Table header -  add title to the table.
TD - table cell - add a cell to the row.
TR - table row - add a row to the table.
