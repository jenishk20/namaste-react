/*
*
*<div id="parent">
*    <div id="child">
*        <h1 id="heading">Hello World from React</h1> 
         <h2 id="heading">Hello World from React</h1>      
    </div>
    <div id="child2">
*        <h1 id="heading">Hello World from React</h1> 
         <h2 id="heading">Hello World from React</h1>      
    </div>
*</div>
*
*
*
*/
import React from "react";
import ReactDOM from "react-dom/client";

// const parent =
//     React.createElement('div', { id: "parent" },[ React.createElement('div', { id: "child" }, [React.createElement('h1', { id: "heading" }, "Hello World from React"),
//     React.createElement('h2', { id: "heading" }, "Hello World from React")]),
//     React.createElement('div', { id: "child2" }, [React.createElement('h1', { id: "heading" }, "Hello World from React"),
//     React.createElement('h2', { id: "heading" }, "Hello World from React")])

// ])

// To much Tidy Code => There comes JSX
// JSX => JavaScript XML

// const root1 = ReactDOM.createRoot(document.getElementById('root'))
// root1.render(parent)

// const heading = React.createElement('h1',{id:"heading"},"Hello World from React")

// root.render(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

const elem = (<span>Span React Element</span>);

const Title = () => <h1 className="heading">Namaste React using JSX</h1>;

const Heading = () => (
  <div id="container">
    <Title />
    {elem}
    <h1 className="heading">Heading Functional Component</h1>
  </div>
);

root.render(<Heading />);
