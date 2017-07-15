# Skeleton template for Angular.js in ES6
Angular.js is one of the most widely used and popular javascript framework in the world. However, it became already
an old school framework compared to React.js and Vue.js which adopted and built on top of new javascript spec ES6.

This skeleton template is desinged to write angular.js project in a way of component-based development through the combination of ES6, Babel, and Webpack.


## Structures
```
app // an angular.js application directory.
├── app.module.js // a main entry module file.
├── app.config.js // a main configuration file.
├── /containers
│   ├── index.js // a registry file to register all contaniers.
│   └── /sample // a sample container
│       ├── index.js // a file where a container's configuration, controller, html files are assgined.
│       ├── controller.js // a file where a container's controller is defined.
│       ├── config.js // a file where a container's configurations are defined (Ex. routing).
│       └── index.html // a html file for a container.
├── /components
│   ├── index.js // a registry file to register all components.
│   └── /sample // a sample component
│       ├── index.js // a file where a component's binding and controller are defined.
│       └── index.html // a html file for a component.
└── /filters
    ├── index.js // a registry file to register all filters.
    └── /sample // a sample filter.
        └── index.js // a file where a filter function is defined.
```

## Commands
For develolopment purpose, a minimal express development server comes with the project. Below are the possible npm commands that a user can execute.
```
# npm install // Install all related javascript packages (Ex. angularjs, express, webpack, etc)
# npm start // Run an express server calling server.js in the project.
# npm run build // Run webpack to complie bundle file out of app/app.module.js
# npm run watch // Run webpack in watch mode to keep updating the changes to angular.js app.
# npm run nodemon // Run nodemon to keep updating the changes to express.js development server.
# npm run dev // Run "npm run watch" and "npm run nodemon" concurrently.
```
