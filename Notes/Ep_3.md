1. We can start out application simply by adding scripts to package.json file.

'''
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

  '''

  By doing this, app can be started by using the command "npm run start" and build in production mode by "npm run build". This is the professional way of doing things. 

# Introduction to JSX

  2. While developing large applications, the following format of creating elements using react createElement() will be more difficult to read and write the code. 

  """
  const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");
  """
  - JSX is not a valid javascript and it cannot be read by JS engine. 

  '''const jsxheading = <h1 id="heading">Hello world from JSX!!</h1>'''
  - Parcel uses Babel to transpile the code before it reaches the JS engine, so that JS engine can understand it. 
  - Babel is a package. As soon as a JSX code is written and saved, Babel will transpile the code to language understand by JS engine. 
  
  reactElement is only a javascript object at the EOD. Babel converts the JSX code to createElement. 

  createElement => JS object => converted to HTML element on rendering

  JSX (Babel converts to) => createElement => JS object => converted to HTML element on rendering
  Both are the same in the browser level. 