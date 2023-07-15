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
import Header from "./components/Header";
import Body from "./components/Body";


const root = ReactDOM.createRoot(document.getElementById("root"));




const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
