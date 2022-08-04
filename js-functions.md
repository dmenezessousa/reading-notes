# Functions 

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

## Defining functions

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets.

For example, the following code defines a simple function named square:

```` 
function square(number) {
  return number * number;
}
````

The function square takes one parameter, called number. The function consists of one statement that says to return the parameter of the function (that is, number) multiplied by itself. The statement return specifies the value returned by the function.

## In Class Examples

````
function greetUser() {
    const userName = prompt("What's your name?");
    let message = "Hello there, + userName";
    return message
}

greetUser() <--- Calling the function

/ ----------------------

function addValues (value1, value2) {
    const addValue = value1 + value2;
    return addValue;
}

console.log(addValues(5, 5));
console.log(addValues("Hello ", "World"));

````

## JavaScript Operators

The assignment operator (=) assigns a value to a variable.

- ``let x = 10;``

The addition operator (+) adds numbers:

- ``let x = 5;
let y = 2;
let z = x + y;``

The multiplication operator (*) multiplies numbers.

- ``let x = 5;
let y = 2;
let z = x * y;``


### JavaScript Arithmetic Operators



| Operator	| Description |
| -------  | ------- |
|+	|Addition |
| - |	Subtraction|
| *	 | Multiplication |
| ** |	Exponentiation (ES2016) |
| /	| Division |
| % |	Modulus (Division Remainder)|
| ++ |	Increment|
| --	| Decrement|

### JavaScript Assignment Operators

|Operator|	Example	|Same As|
| ---- | ---- | ---- |
|=	|x = y	|x = y|
|+=	|x += y	|x = x + y|
|-=	|x -= y	|x = x - y|
|*=	|x *= y	|x = x * y|
|/=	|x /= y	|x = x / y|
|%=	|x %= y	|x = x % y|
|**=	|x **= y	|x = x ** y|

## JavaScript String Operators

````
let text1 = "John"; 
let text2 = "Doe";
let text3 = text1 + " " + text2;

The result of text3 will be:

- John Doe

The += assignment operator can also be used to add (concatenate) strings:


let text1 = "What a very";
text1 += "nice day";


The result of text1 will be:

- What a very nice day
````
