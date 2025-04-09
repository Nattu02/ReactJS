import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // => here the h1 element is created and put into the root. 

console.log(heading); //  => this is an object

const jsxheading = <h1 id="heading">Hello world from JSX!!</h1> //=> this is the react element at the end of the day.
// => this is not a valid javascript and JS engines cannot read this code
root.render(jsxheading); // => here the h1 element is created and put into the root.


// const parent = React.createElement("div", {id: "parent"}, 
//     [
//         React.createElement("div", {id: "child", key: "d1"}, 
//         [
//             React.createElement("h1", {id: "head", key: "h1"}, "Heading 1 inside child!!"),
//             React.createElement("h2", {id: "subhead", key: "sh1"}, "Sub heading 1 inside child!!")
//         ]), 
//         React.createElement("div", {id: "child2", key: "d2"}, 
//         [
//             React.createElement("h1", {id: "head2", key: "h2"}, "Heading 2 inside child!!"),
//             React.createElement("h2", {id: "subhead2", key: "sh2"}, "Sub heading 2 inside child!!")
//         ]) 

// ]
// );

// const child = React.createElement("div", {id: "child"}, heading)

// const parent = React.createElement("div", {id: "parent"}, child);

// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(parent); // => here the div element is created and put into the root2.

// The react object is converted into a virtual DOM object, that is understand by the browser. 

console.log(parent); 

const Title = () =>{
    <h1>Page title goes here</h1>
}

const Title2 =() =>{
    return <h1>Second title for page</h1>
}

const num = 1000;

const HeadingComponent = () =>(
    <div>
        <Title />
        <Title2 />
        {
            jsxheading
        }

        <h1 id="heading">Main Heading!!</h1>
        <h2 id="subheading">Sub heading</h2>
    </div>
) 
// => this is a functional component.


root.render(<HeadingComponent/>)