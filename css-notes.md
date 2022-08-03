# CSS NOTES

## What is CSS?

- CSS (Cascading Style Sheets) allows you to create great-looking web pages.

- Allows you to modify HTML elements. Changing their shapes, sizes, fonts and colors by using the elements "Tag" or classes and ID's attributes in these Elements.

--- 

## What is CSS for?

CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.

---

## CSS Syntax

 you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page.

-Examples: 

- ``h1 {
    color: red;
    font-size: 5em;
}``

- `` p {
    color: black;
}``

---

## How to add CSS to your HTML Page

There are three ways of inserting a style sheet:

- External CSS

````
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
````

An external style sheet can be written in any text editor, and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

- Internal CSS

````
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
````

The internal style is defined inside the ``<style>`` element, inside the head section.

- Inline CSS

````
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
````

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

---
[Back to Home](README.md)

Check out my [GitHub Portfolio](https://github.com/dmenezessousa/)
