// Q-1 What is ReactJs?
// Ans:- 1.1 React is a JavaScript library - one of the most popular ones.
// 1.2 React is not a framework (unlike Angular, which is more opinionated).
// 1.3 React is an open-source project created by Facebook.
// 1.4 React is used to build user interfaces (UI) on the front end.
// 1.5 React is the view layer of an MVC application (Model View Controller)

// Q-2 What is Component in ReactJs?
// Ans:- A component is one of the core building blocks of react. In other words, we can say that every application you will develop in react will be made up of pieces called components. Component make the task of building UI's much easier.

// Static HTML File

{/* <head>
<meta charset="utf-8" />

<title>Hello React!</title>

<script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script> // React - the React top level API

<script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.production.min.js"></script> //React DOM - adds DOM-specific methods

<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script> //Babel - a JavaScript compiler that lets us use ES6+ in old browsers

</head>

<body>
<div id="root"></div>

<script type="text/babel">
  // React code will go here
</script>
</body> */}

// Q-3 Render()
// Ans Render is used to show.(Dikhana)

// ReactDom.render('Kya dikhana hai what to show', 'kaha dikhana hai where to show');
//Example:- ReactDOM.render(<h1>Hello world</h1>,document.getElementById('root'));

// we need to import reat and react-Dom.
// import React from 'react';
// import ReactDOM from 'react-dom';

// Q-4 What is Babel
//Ans Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript.
// With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).
// Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.

//Q-5 What is Webpack ?
//Ans webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging ...
// It make folders and all js file combine in js folder same as css.

//You need to search more about webpack.

// Q-6 What is JSX?
//Ans Javascript Extension or Javascript XML(JSX).
//JSX allows us to write HTML in React.
// JSX makes it easier to write and add HTML in React.

// import React from "react" // This is use to import JSX

//  #Expressions in JSX

// With JSX you can write expressions inside curly braces { }.
// The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
// Example:- const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

//# One Top Level Element
// The HTML code must be wrapped in ONE top level element.
// So if you like to write two headers, you must put them inside a parent element, like a div element

// Example:- const myelement = (
//   <div> // This is parent element.
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// );


//Q How add multiple JSX element in Rendor methor?
// There are two ways to render JSX are :- 
// 1. Method 
// ReactDOM(
// <div>
// <h1>Hello</h1>
// <p>Hello Para</p>
// </div>,document.getElementById("root")
// );

// 2. Array of element 
// If react version above from 16.x.x

// RenderDOM(
//   [
//   // <h1>Hello</h1>,
//   //  <p>Hello Para</p>

//   ]
//   ,document.getElementById("root"));

// Q What is React Fragment?
//Ans <React.Fragment> </React.Fragment>
// OR We can also use <></> this is also fragment.

// Q JavaScript Expressions in JSX
//Ans if you use javascript in JSX you should use curly brackets 
// Example:-  
// const fname="Manmohan";
// const lname="Singh";
// ReactDom.render(<> <h1>My name is {fname +" "+lname}</h1></>,document.getElementById('root'));

// ReactDom.render(<> <h1> 5x4 is {5*4}, 5+5 is {5+5} and random number is {Math.random()}</h1></>,document.getElementById('root'));
 












//type conversion
// let score='100';

// console.log(score+1);//will return 1001

// score=Number(score);
// console.log(score+1);//will return 101
// console.log(typeof score);

// let result =Number('hello');
// console.log(result);//will return NaN

// let results =String(50);
// console.log(result , typeof result);//will return 50

// let res = Boolean(0);
// console.log(res,typeof res);

// let re = Boolean('0');
// console.log(re,typeof re);



















