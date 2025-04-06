import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // => here the h1 element is created and put into the root. 

console.log(heading); //  => this is an object


const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child", key: "d1"}, 
        [
            React.createElement("h1", {id: "head", key: "h1"}, "Heading 1 inside child!!"),
            React.createElement("h2", {id: "subhead", key: "sh1"}, "Sub heading 1 inside child!!")
        ]), 
        React.createElement("div", {id: "child2", key: "d2"}, 
        [
            React.createElement("h1", {id: "head2", key: "h2"}, "Heading 2 inside child!!"),
            React.createElement("h2", {id: "subhead2", key: "sh2"}, "Sub heading 2 inside child!!")
        ]) 

]
);

// const child = React.createElement("div", {id: "child"}, heading)

// const parent = React.createElement("div", {id: "parent"}, child);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent); // => here the div element is created and put into the root2.

// The react object is converted into a virtual DOM object, that is understand by the browser. 

console.log(parent); 