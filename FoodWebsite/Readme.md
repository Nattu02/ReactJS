/* 
    AppLayout component
        Header
            logo
            nav-items
        Body
            Search
            RestaurantList
        Footer
            copyright
            contact
            links

*/


# React hooks

 These are normal JS utility functions written by Facebook developers. 
 Two most important hooks. 
 - useState() - used to create superpowerful react variables
 - useEffect()

 React hooks should be imported as named imports 
 import {useEffect} from "react";

State varaibles can be created as => const [Name, setName -> function to modify the variables ] = useState([Value for the variable])


# React Fiber

- React makes the app fast because of DOM manipulation. 
- Virtual DOM is the special representation of actual DOM. (object representation)
- As soon as any changes made in the state variable, react re-renders the component. 
- This process is done with the help of **Reconciliation** algorithm. This algorithm uses **diff** to compare the original DOM and the new DOM and updates the DOM tree (UI). 
- **setState** function helps in triggering the react component after modifying the state variable. 

Whenever a state variable changes, react triggers the reconciliation algorithm and rerenders the component. 

# useEffect() hook
- If there is no dependency array, useEffect is called every time the components renders. 
- If there is an empty dependency array, useEffect is called only on initial render (Just once).
- If dependency array is given some value, then useEffect is called every time the given value gets updated. 

# useState() hook
- It is advised to create local state variables at the start of the functional components. 
- These hooks cannot be created 
        1. outside functional components
        2. inside conditions (if...else)
        3. inside loops (for, while)
        Else, these will cause inconsistencies. 

# Routing in react

 **npm install react-router** 
 **import {CreateBrowserRouter, RouterProvider} from "react-router";** 

 - First of all, routing configurations should be created using **CreateBrowserRouter**. Routing configuration is done by creating a list of objects representing the paths and components. 
 - Children routes can also be given as a list of objects, similar to other routes.  
 - To display the error page/component, **errorElement** is the parameter used to map with the error component inside routes.

# Link component
- It is not advised to use anchor tag in react applications as they cause the entire page to reload on clicking the anchor tag. 
- Instead, we can use **<Link>** component from react-router to link the buttons to routes. **<Link>** is similar to anchor tags, but it only routes to the desired page, without reloading the entire page. 

# Routing in web apps

There are two types of routing in web apps
1. Client side routing - All the components are already loaded into the webside, and UI changes when the route changes. 
2. Server side routing - Make a network call, and the page comes from server and reloads the entire website.