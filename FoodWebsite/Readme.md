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
- 