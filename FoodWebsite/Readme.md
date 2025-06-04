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

- There is a return method in useEffect, that is similar to **componentWillUnmount()** in class components, that acts like a cleanup function to clean the code once the other component is rendered. 


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


## State variables should never be updated directly 
## State variables in class component can be modified by using setState({}) functiion. This takes an object that contains the updated vales of state variables

# Class based component lifecycle
- First the constructor is called
- Then the render method is called
- Then the componentDidMount function is called
- If any children comes in, the same life cycle starts and continues. 
- The componentDidMount of parent is called only after the child component is fully rendered. ie: The componentDidMount of child component is called. 
- If there is a child component inside a parent component, the order of execution is as follows: parent constructor -> parent render method -> child constructor -> child render method -> child ComponentDidMount -> parent componentDidMount. 

# ComponentDidMount
- The ComponentDidMount method is mainly used for API calls, similar to useEffect in functional component. This is because, the ComponentDidMount reuns after the component renders to the web page. The API calls are made once after the component rendered.

# Custom hooks in react
- Can be created in utils folder with the name starting with lower case **use____**. 
- This is similar to other funcitonal components, and can be created, exported, and imported in the same way. 
- Custom hooks can use other hooks in it, similar to other components. 

# Optimizing our app
- **Parcel** is a bundler, that bundles our application to a single JS file. 
- That file can be found in **Dist** folder, and that single file is loaded to the browser. 
- Increasing the size of that file may slow down the website. 
- To prevent this, several methods can be followed. 

- They are: 
1. Chunking
2. Code splitting
3. Dynamic bundling
4. Lazy loading
5. On-demand loading

- All of these are same, but have different terminologies. To breakdown the app into samller chunks. 



# Different ways of writing CSS to our application

- Normal CSS in a separate file
- SASS ans SCSS
- Component styling
- Material UI
- Bootstrap
- Chakra UI
- Tailwind CSS


# Higher order components

- These are functions that takes a component as input and returns a component as output. 
- The returned component is the enhanced version of the input component. 
- The HOC is defined and exported in the same component which is passed as an argument. 
- This can be imported as a named import in the caller component.
- After imported, a new component is created by passing a component. **const NewComponent = HOC(ExistingComponent)**

# Layers in react application

- There aer two layers in a react application.
- **UI layer** and **Data layer**
- UI layer maintains the JSX codes to display the static content in the webpage. 
- Data layer manages all the states, variables, functions, and other things in a component. 
- UI layer is powered by the data from the data layer. 

# Controlled and uncontrolled components

- Controlled components are components, which are controlled by its parent component. 
- For example, in this project, if the component showing the list of items is having its own state and managed the expanding and collapsing of list, parent component has no control over it. This is **Undontrolled component**.
- Instead, if the parent componenet sends a variable to manage the expanding and collapsing of list items and the child component responds accordingly, this is called controlled components. 

# Lifting the state up

- If a state is to be shared between parent and the children components, that can be done with the help of the concept called **Lifting the state up**.
- Here, the state in the child component is deleted first.
- And then the state is created in parent component and send to child as a **props**. 
- The state in the parent component can be modified by the child component by an event handler function. At the same time, the function to modify the state is also sent as a props to the children component. 

# useContext hook

- To use a variable in a global level (ie: In any of the components of the application), a context can be created.
- To do that we can use create a context by using **createContext** from react. 
- Any type of variable can be created using createContext.
- This can also be exported as default. 
- This can be imported from corresponding directory, and can be used with the help of the hook **useContxt**.
- import userContext from "./utils/userContext";
- const userName = useContext(userContext);
- Specific values can be given to the context variables by using **state** and **Provider** components. 
- The components can be wrapped inside the **Provider** and the values can be passed. 


# Different types of function calls 

- onClick={() => handleAddItems(dishlist.card.info)} => Here, a callback function is created and the handleAddItems function is called only when the button is clicked. 
- onClick = {handleAddItems(dishlist.card.info)} => This calls the function at the time of rendering itself. And the result of the function call is passed to the onClick and nothing happens here on the button click. 
- onClick = {handleAddItems} => This is preferred when there is no arguments passed to the function. Similar to the first one, calls the function once the button is clicked. 

# Redux 

- Redux is a state management library
- Redux and React are two different libraries, that are installed separately
- There are other state management libraries like Redux. Zustand is one of the examples. 
- Redux offers easy debugging. 

# How redux works?

- **Redux store** - A large central javascript object, that contains data which can be accessed from any of the components in the application. This data can be read or modified from any of the components. 
- **Slice** - Inside redux store, there are smaller portions for each functionality, (carts, userInfo, themes, etc.) and these are called slices. 
- **Dispatch (Action)** - When the add button is clicked, it **dispatch an action**, which calls a **reducer function**, and this reducer function will modify the data in the slice. 
- **Selector** - To read data from the slice, there is a thing called **selector**. This means that the component in the UI is **subscribing to the store**. This means, whenever the data in the store changes, the UI component updated automatically. 

## ADD button clicked => Dispath (Action) => Reducer function => modify/update the slice in the store => Selector (subscribing to the store) => UI component gets updated


# Points to remember in Redux

  ## It is important to use correct selector to prevent performance issues. 
  - The selector should be specific to the requirements. 
  - If the cart items are needed to be read, the selector should be like this. => const cart = useSelector((store) => store.cart.items)
  - The above can also be written as const store = useSelector((store) => store)  => const cart = store.cart.items
  - The second one is not recommended, as it will cause unwanted performance issues. 
  - Any achange in any of the store variables will affect the component in which the selector is written like this. 
  - So, it is mandatory to be specific while writing selectors. 


## Difference between **reducer** and **reducers**
  - Redux store has a one big reducer that contains all the slices. **(Reducer)**
  - Each slice has multiple small reducers that is an object of actions which are mapped with reducer functions. **(Reducers)**

## Mutate the state in **Vanilla redux** and **Redux toolkit**
- In older redux, **(Vanilla redux)** states are immutable. They cannot be mutated.
- To modify a state, a copy of it should be created and the copy should be modified and returned.
- It is mandatory to return a state in older redux. 

- But in new redux **(Redux toolkit)**, we have to mutate the state. 
- Returning a state is not mandatory here. 
- The process of mutating the state is done by the redux using the **Immer** library. 

