# JavaScript Notes

---

## JavaScript Variables

What are Variables?

Variables are containers for storing data (storing data values).

4 Ways to Declare a JavaScript Variable:

- Using const
- Using let
- Using const
- Using nothing

Examples:

- ``var x = 5;
const y = 6;
const z = x + y;``

The value of z is: 11

---

- ``let x = 5;
let y = 6;
let z = x + y;``

The value of z is: 11

---

This is exemple is not used much
x = 5;
y = 6;
z = x + y;

The value of z is: 11

From all the examples above, you can guess:

- x stores the value 5
- y stores the value 6
- z stores the value 11

---

## When to Use JavaScript const?

If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

---

## JavaScript Identifiers

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

---

## How to add Javascript to HTML file

External References

- ``<script src="Full path here"></script>``
- ``<script src="/js/myScript.js file path"></script>``
- ``<script src="myScript.js just the file name"></script>``

JavaScript in ``<head>``

````
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
````

JavaScript in ``<body>``

````
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
````

---

[Back to Home](README.md)

Check out my [GitHub Portfolio](https://github.com/dmenezessousa/)