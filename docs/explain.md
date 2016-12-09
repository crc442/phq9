- [Design Goals](#design-goals)
- [Design](#design)
- [Project Structure](#project-structure)
- [Explanation](#explanation)
  - [Components](#components)
  - [Redux](#redux)
  - [Testing](#testing)
- [Future](#future)

## Design Goals
- ES6 with Webpack and Babel
- Fast testing with shallow rendering using AVA and enzyme
- Import css files as class names using css-modules
- Separate [Smart and Dumb](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components
- Using Redux to manage state

## Design
- Full Page

![](https://github.com/crc442/phq9/blob/master/docs/design1.png)

- Scrolling

![](https://github.com/crc442/phq9/blob/master/docs/design2.png)

Choose **2 (Scolling)** because it seems quicker and more efficient.
'Tracker' at the bottom trackes answered/unanswered questions.

## Project Structure
```
--> app                   // client app
    --> actions           // redux actions
    --> components        // dumb/stateless components
    --> containers        // smart/connected components
    --> reducers          // redux reducers
    --> index.js          // client starts here
    --> store.js          // redux store
--> public                // public folder
    --> images
    --> scripts
        --> bundle.js     // client app bundle into this with webpack
    --> styles
    --> index.html
--> test                  // test folder
    --> components
    --> containers
    --> helpers
    --> reducers
--> app.js                // server file
```

## Explanation
  You start with the index page which diaplays the 9 questions.
  While you select the answers, the 'Tracker' in the Footer tracks answered/unanswered
  questios. When you select all the answers, a submit btn appears.
  The result page displays your score, and whether or not you need therapsits.
  The score is color coded.

### Technical
  At the beginning there is no real reason to have an async call to get the initial
  state of the application, so this application is technically not a 'univeral' app,
  but that can be easily done with 'redux-sagas' if needed.
  The server, other than serving the 'one-page' application, also hosts an api to fetch
  the available therapists.
  Side-Note: Proud of the 'Tracker' component. Also, realized that the Rating (star) component,
  with a few changes/features, can be worth open-sourcing.

### Components
  The components are divided on smart and dumb components.  The `containers` folder
  has smart components. They know about Redux and help pass on state of the App to
  other components as props.
  The `components` folder conists on dumb stateless components. They are written as
  pure javascript function, to help with performance and clear code.

### Redux
  Using Redux to maintain state. Using connect decorators transpiled using a babel
  plugin.

### Testing
  Unit tests are written using ava and enzyme. I like doing TDD whenever I can, but
  did not do in this case due to lack of time. However, the test folder has
  multiple examples of testing 'containers', 'components' and 'reducers'.

## Future
  - [ ] complete tests
  - [ ] add webpack-dev-server
  - [ ] test coverage
  - [ ] more commands/scripts(ex. build)
