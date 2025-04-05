Before pushing our app from development to production, a lot of activities has to be done, like optimizing and cleaning the code, optimizing the images, caching, etc.

npm => it manages all the packages for node

"npm init" - by running this command, package.json file will be created. This is the configuration of our app, that contains all the necessary details and description. All the packages/dependencies used by the app will be mentioned here along with the version number. The version number used here is the one at the time of installation. 

Bundler => It is not only react making our app faster. There is another hero called "bundler." Bundler is a tool that combines the files in the app in to bundles and serve them to the browser. There are different types of bundlers, Webpack, parcel, etc. 

"npm install -D parcel" - The dependency/package parcel is installed to our app. This will create a package-lock.json file and import node modules. 
package-lock.json -> Contains the specific versions of all the dependencies and sub dependencies that are in package.json file. 

Node modules are very heaby files, as it contains the code for all the dependencies installed. 

