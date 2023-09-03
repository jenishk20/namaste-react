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
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="App">
    <Header />
    <Outlet/>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
