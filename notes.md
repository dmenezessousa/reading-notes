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



----------------------------------------------------

Class 08 - Learning Journal 08

Css layouts

reponsive layouts are layouts that change with screen size:

The size our content (Pizels/ percentages / width and height / box model)

how does our content behave around parents and siblings

Absolute - Position according to its parent.

Fixed - ignore parents and children, only position according to the view windown

relative - position an element relative to parents and siblings

display - how much space it gives to siblings. 

block: Take up as much space as posible. Content will take up the width of it's parent.

inline-block: similar to block, but it wont disallow other elements from sitting right next to it.

inline: Elements will flow  wherever the can fit, you cannot set height and width. When you need something to take up as little space.

flex box

Flex: is set on a container elements, and tellls that element how to layout it's children.



-----------------------------------------------------

Class 09 notes

HTML Forms

HTML is very user input heavy, and Form elements are our bread and butter.
Elements that users interact with the most, forms allow us to capture the "values" or 
"data that users are trying to give us.

  -Most forms use spefic attributes to read values in JS.

```html
<body>
    <form>
        <input name="nameValue" type="text">
        <input name="typeValue" type="text">
        <input name="heathValue" type="text">
        <button type="submit">Create New Value</button> 
    </form>
</body>
```

Events API

JS gives us a way to respond to things happening in the browser.

 -HTML page loads.
 -Comminication between other systems / computers.
 -Users typing / clicking/ moving around the mouse.
 -The Events API gives a way to "listen" for when a specific event occurs

```javascript
cookieForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let { cookie, cookie_type } = event.target;
  console.log(cookie.value, cookie_type.value);
});
```

--------------------------------------------------------------

Class 10 notes

## JS Debugging

  -Javascript code has a high potential for buggy code.
  -We can use Console.log to debug.

## Error Types

In general we see 4 error types.

  -Reference Error: refe to a variable or obj that is not define.
  -Syntax Error: Missing parenthenses / brackets (open and closed),
  common typos often cause this.
  -Type Error: reference, property or method, that doesnt exist.
  -Range Error: Often occurs when creating / using array.



----------------------------------

Class 11 notes

Audio/Video elements

Audio: you can insert an audio to the webpage and the user can control the volume or stop it from playing.

Video: same as audio however the user has an visual display together with the audio.

-----------------------------------
Class 12

Today I learned about how to use the .split method.

 we can use to .split method to break up string such as:

    let name = 'diego'; 

 using the .split method would look like this ?

  name.split('') name now is equal to ['d','i','e','g','o']

 So we can modify any part of the string as we like, we make first letter a capital letter, we can make the last letter capital letter, we can replace a letter and etc...
 and when we done we just use the .join method to put everything together:
  name.join('');

Also we went over on how to use a library to import a chart to our page via chart.js which we can modify all the data/labels/format of chart according to our needs.

-------------------------------

class 13
