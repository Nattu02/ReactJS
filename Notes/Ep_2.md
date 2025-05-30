- Before pushing our app from development to production, a lot of activities has to be done, like optimizing and cleaning the code, optimizing the images, caching, etc.

- npm => it manages all the packages for node

- "npm init" - by running this command, package.json file will be created. This is the configuration of our app, that contains all the necessary details and description. All the packages/dependencies used by the app will be mentioned here along with the version number. The version number used here is the one at the time of installation. 

- Bundler => It is not only react making our app faster. There is another hero called "bundler." Bundler is a tool that combines the files in the app in to bundles and serve them to the browser. There are different types of bundlers, Webpack, parcel, etc. 

- "npm install -D parcel" - The dependency/package parcel is installed to our app. This will create a package-lock.json file and import node modules. 
package-lock.json -> Contains the specific versions of all the dependencies and sub dependencies that are in package.json file. 

- Node modules are very heavy files, as it contains the code for all the dependencies installed. 

# parcel (Things done by parcel in an application)

 - Dev build
 - Local server
 - HMR (Hot module replacement)
 - File watching algorithm (written in C++)
 - Caching
 - minification
 - Code compression
 - Image optimization
 - Bundling
 - Consistent hashing
 - Code splitting
 - Differential bundling (supports older versions)
 - Error handling
 

- To build our app using parcel use the command "npx parcel index.html"

This will host our app in a local development server. 
Parcel will compress the codes and store them in dist and parcel-cache folders. 
React can also be inserted to the HTML page using imports, without using CDN links. MOreover, CDN links are not recommended and npm is always preferred eway. 
dist and .parcel-cache folders are also recreatable. So, they need not be pushed into github. 

- To build our app in production environment, we can use the command "npx parcel build index.html"

- We can also add browserslist, which determines the list of browsers by which the app is supported by. 

