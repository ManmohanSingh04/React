// Question-1 What are the major features of React?
//Ans The major features of React are:

// It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
// Supports server-side rendering.
// Follows Unidirectional data flow or data binding.
// Uses reusable/composable UI components to develop the view.

// Question-2 What is JSX?
//Ans Javascript Extension or Javascript XML(JSX).
//JSX allows us to write HTML in React.
// JSX makes it easier to write and add HTML in React.

//  Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.

// =====Syntactic Sugar
// React JSX is a syntactic sugar for creating DOM elements using Javascript. It essentially outputs HTML in the document.
//Example 
// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{'Welcome to React world!'}</h1> // This is JSX.
//       </div>
//     )
//   }
// }
// The browser understands only HTML to provide the visual representation to the user. The browser can't do that with JavaScript alone.

// Question-3 What is difference between React Elements VS Components?
// Ans 1. React Element - It is a simple object that describes a DOM node and its attributes or properties you can  say. It is an immutable description object and you can not apply any methods on it.
// Example:- <button class="blue"></button> // ye ek simple element hai jo html main create hota hai.

// 2. React Component - It is a function or class that accepts an input and returns a React element. It has to keep references to its DOM nodes and to the instances of the child components.

// const SignIn = () => (
//   <div>
//    <p>Sign In</p>
//    <button>Continue</button>
//    <button color='blue'>Cancel</button>
//   </div>
// ); 

// Question-4 What are the two main ways to create components ? Ans we can use ES6-class and functions
// Ans There are two possible ways to create a component.

// 1:- Function Components:- This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:

// function Greeting({ message }) {
//   return <h1>{`Hello, ${message}`}</h1>

// }

//2:- Class Components:- You can also use ES6 class to define a component. The above function component can be written as:

// class Greeting extends React.Component {
//   render() {
//     return <h1>{`Hello, ${this.props.message}`}</h1>
//   }
// }

// Question-5 When to use class components over a function components?
// Ans If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.

// Question What is the use of default?

// Question What is shallow reference?
// Ans Shirf upar upar se hi jo first level par references hai unko hi check karunga depth main reference nahi check karunga.(I will check references from above only, i will not check reference in depth )
// 
// Question-6 What are pure components?

// Question-7 What is state in React ?
//Ans React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.(State built-in object hai react main or state component ko data create and manage karne deta hai.)

//State should not be modified directly, but it can be modified with a special method called setState( ).

// Let's create a user component with message state,

// class User extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       message: 'Welcome to React world'
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//       </div>
//     )
//   }
// }

//State is similar to props, but it is private and fully controlled by the component. i.e, It is not accessible to any other component til the owner component decides to pass it.

// Question-8 What are props in react ?
// Ans They are data passed down from a parent component to a child component.

// The primary purpose of props in React is to provide following component functionality:

// Pass custom data to your component.
// Trigger state changes.
// Use via this.props.reactProp inside component's render() method.
// For example,

// file-1
// function(props){
//     return(
    //    <div>
    //    <h1>{props.text}</h1>
    // OR
    //    <h1>{props.text.name}</h1>

    //    </div>
// )
// }

// File-2
// function App(){
//     return(
//         <>
//         {/* <file-1 text="Hello Props"/> */}
//         // Or
//         <file-1 text={{name:'Mannu'}}/>
//         </>
//     )
// }

// Question-9 What is difference between state and props ?
// Ans State ek class ka internal object hota hai or ye private hota hai(private ka matalab class se bahar access nahi ho skta).
// Ye object hota hai or ye variable ki jaise kaam karta hai. iss main ek object hota hai or ek key hota hai or key ke andar koi bhi value ham assign kar sakte hai. or uss value ko ham kahi bhi use kar sakte hai or usko update bhi kar sakte hai and state changeable hoti hai.

// :- Components receive data from outside with props, whereas they can create and manage their own data with state
// :- Data from props is read-only, and cannot be modified by a component that is receiving it from outside
// :- Props are used to pass data, whereas state is for managing data
// :- State data can be modified by its own component, but is private (cannot be accessed from outside)
// :- Props can only be passed from parent component to child (unidirectional flow)
// :- Modifying state should happen with the setState ( ) method


// Question-10 Why should we not update the state directly?
//Ans If you try to update state directly then it won't re-render the component.
// Example:-  it's Wrong
// this.state.message = 'Hello world'

// Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

// //Correct
// this.setState({ message: 'Hello World' })
// Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.



// Question-11 What is the purpose the callback function in the setState() method ?
// Question-12 What is difference between React VS HTML evelt handling ?
// Question-13 How to pass a parameter tp event handlers?
// Question-14 What are syntheticEvent in react?
// Question-15 What are inline conditional expressions ?
// Question-16 What is the Key prop and why do we use?



