import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-4xl text-gray-50 text-center mt-6 bg-gray-800 font-bold p-6">
        My blogs
      </h2>
      <div>
        <section className="bg-gray-800 text-gray-100">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">
              Some questions about web development
            </h2>
            <p className="mt-4 mb-8 text-gray-400"></p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What are the different ways to manage a state in a React
                  application?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  React's useState is the best option for local state
                  management. If you need a global state solution, the most
                  popular ones are Redux, MobX, and the built-in Context API.
                  Your choice will depend on the size of your project, your
                  needs, and your engineers' expertise.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does prototypical inheritance work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object. getPrototypeOf and
                  Object.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is a unit test? Why should we write unit tests?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  React vs. Angular vs. Vue?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  <strong>React: </strong> React can be used as a UI library to
                  render elements, without enforcing a specific project
                  structure, and that’s why it’s not strictly a framework. React
                  Elements are the smallest building blocks of React apps. They
                  are more powerful than DOM elements because the React DOM
                  makes sure to update them efficiently whenever something
                  changes. Components are larger building blocks that define
                  independent and reusable pieces to be used throughout the
                  application. They accept inputs called props and produce
                  elements that are then displayed to the user. React is based
                  on JavaScript, but it’s mostly combined with JSX (JavaScript
                  XML), a syntax extension that allows you to create elements
                  that contain HTML and JavaScript at the same time. Anything
                  you create with JSX could also be created with the React
                  JavaScript API, but most developers prefer JSX because it’s
                  more intuitive.
                  <br /> <strong>Vau: </strong> The Vue.js core library focuses
                  on the View layer only. It’s called a progressive framework
                  because you can extend its functionality with official and
                  third-party packages, such as Vue Router or Vuex, to turn it
                  into an actual framework. Although Vue is not strictly
                  associated with the MVVM (Model-View-ViewModel) pattern, its
                  design was partly inspired by it. With Vue, you’ll be working
                  mostly on the ViewModel layer, to make sure that the
                  application data is processed in a way that allows the
                  framework to render an up-to-date View. Vue’s templating
                  syntax lets you create View components, and it combines
                  familiar HTML with special directives and features. This
                  templating syntax is preferred, even though raw JavaScript and
                  JSX are also supported. Components in Vue are small,
                  self-contained, and can be reused throughout the application.
                  Single File Components (SFCs) with the .vue extension contain
                  HTML, CSS, and JavaScript so that all relevant code resides in
                  one file. SFCs are the recommended way to organize code in
                  Vue.js projects, especially larger ones. Tools such as Webpack
                  or Browserify are required to transpile SFCs into working
                  JavaScript code.
                  <br /> <strong>Angular: </strong>AngularJS, the original
                  framework, is an MVC (Model-View-Controller) framework. But in
                  Angular 2, there’s no strict association with MV*-patterns as
                  it is also component-based. Projects in Angular are structured
                  into Modules, Components, and Services. Each Angular
                  application has at least one root component and one root
                  module. Each component in Angular contains a Template, a Class
                  that defines the application logic, and MetaData (Decorators).
                  The metadata for a component tells Angular where to find the
                  building blocks that it needs to create and present its view.
                  Angular templates are written in HTML but can also include
                  Angular template syntax with special directives to output
                  reactive data and render multiple elements, among other
                  things. Services in Angular are used by Components to delegate
                  business-logic tasks such as fetching data or validating
                  input. They are a distinct part of Angular applications. While
                  Angular doesn’t enforce their use, it’s highly suggested to
                  structure apps as a set of distinct services that can be
                  reused. Angular is built in TypeScript, so its use is
                  recommended to get the most seamless experience, but plain
                  JavaScript is also supported.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
