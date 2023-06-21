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

const parent =
    React.createElement('div', { id: "parent" },[ React.createElement('div', { id: "child" }, [React.createElement('h1', { id: "heading" }, "Hello World from React"),
    React.createElement('h2', { id: "heading" }, "Hello World from React")]),
    React.createElement('div', { id: "child2" }, [React.createElement('h1', { id: "heading" }, "Hello World from React"),
    React.createElement('h2', { id: "heading" }, "Hello World from React")])

])

// To much Tidy Code => There comes JSX
// JSX => JavaScript XML

const root1 = ReactDOM.createRoot(document.getElementById('root'))
root1.render(parent)