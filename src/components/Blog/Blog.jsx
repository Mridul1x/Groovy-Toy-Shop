import React, { useRef } from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl mt-6 text-center font-bold">Blogs</h1>
      <div className="mx-12 text-justify">
        <h1 className="mt-6 mb-2 text-xl font-semibold">
          1. Uncontrolled and controlled components
        </h1>
        <p>
          Uncontrolled components are HTML form elements that manage their own
          state internally. When a user interacts with an uncontrolled
          component, the component directly updates its internal state without
          any explicit intervention from the developer. This makes uncontrolled
          components easier to use, as the developer doesn't need to write any
          state management code. However, it also means that the developer has
          less control over the component's behavior, and it can be more
          difficult to validate and manipulate user input.
        </p>
        <p className="my-2">
          Controlled components, on the other hand, are form elements whose
          values are controlled by the developer through explicit state
          management. When a user interacts with a controlled component, the
          component's state is updated by the developer through an event
          handler. This gives the developer more control over the component's
          behavior, as they can easily validate and manipulate user input before
          it is submitted. However, it also requires more code and can be more
          complex to implement.
        </p>
        <p>
          Overall, the choice between controlled and uncontrolled components
          depends on the specific use case and development requirements.
          Uncontrolled components may be preferable for simple forms where
          minimal validation is required, while controlled components may be
          better suited for more complex forms where advanced validation and
          manipulation of user input is necessary.
        </p>
        <h1 className="my-2 text-xl font-semibold">
          2. How to validate React props using PropTypes
        </h1>
        <p>
          In React, PropTypes is a library that provides a way to validate the
          data types of component props. PropTypes helps catch common mistakes
          early on by providing a way to check if the props passed to a
          component meet the specified requirements. Here's how to use PropTypes
          to validate props:
          <li>Import the PropTypes library</li>
          <li>
            Define the propTypes for the component by adding a propTypes object
            to the component class
          </li>
          <li>
            Specify the propTypes for each prop by adding the appropriate
            propTypes method to the propTypes object. In the example above,
            we're specifying that myProp is required and must be a string, and
            that myNumProp is optional and must be a number.
          </li>
          Here are some of the most commonly used PropTypes methods:
          <li>PropTypes.string</li>
          <li>PropTypes.number</li>
          <li>PropTypes.bool</li>
          <li>PropTypes.func</li>
          <li>PropTypes.object</li>
          By using PropTypes, you can ensure that your components receive the
          correct data types for their props, and catch errors early in the
          development process.
        </p>
        <h1 className="my-2 text-xl font-semibold">
          Difference between nodejs and express js.
        </h1>
        <p>
          Node.js and Express.js are both JavaScript-based technologies used for
          server-side web development. Node.js is a runtime environment that
          allows developers to run JavaScript on the server-side, while
          Express.js is a web framework that runs on top of Node.js and provides
          a set of tools and features for building web applications.
          <br />
          Here are some of the key differences between Node.js and Express.js:
          <li>
            Functionality: Node.js provides a platform for building server-side
            applications in JavaScript. It includes a set of built-in modules
            for file system operations, networking, and other low-level
            operations. Express.js, on the other hand, is a web framework built
            on top of Node.js. It provides a set of features for building web
            applications, such as routing, middleware, and template rendering.
          </li>
          <li>
            Routing: While Node.js includes basic routing capabilities,
            Express.js provides a more robust and flexible routing system. With
            Express.js, you can define routes for HTTP methods such as GET,
            POST, PUT, DELETE, and more.
          </li>
          <li>
            Middleware: Express.js provides a middleware layer that allows you
            to add functionality to your application's request/response cycle.
            Middleware functions can modify the request or response object, or
            execute additional logic before or after a request is processed.
          </li>
        </p>
        <h1 className="my-2 text-xl font-semibold">
          What is a custom hook, and why will you create a custom hook?
        </h1>
        <p>
          In React, a custom hook is a JavaScript function that uses one or more
          built-in React hooks and/or other custom hooks to encapsulate a
          specific piece of functionality. Custom hooks allow you to reuse logic
          between different components, and can help make your code more modular
          and easier to maintain. This custom hook, useToggle, returns an array
          containing the current boolean state value and a toggle function that
          can be used to update the state.
        </p>
        <p className="mt-1">
          There are many reasons why you might create a custom hook, including:
        </p>
        <li>
          Reusability: By encapsulating specific functionality into a custom
          hook, you can easily reuse that logic across different components in
          your application.
        </li>
        <li>
          Abstraction: Custom hooks can help abstract away complex logic, making
          your components simpler and easier to reason about.
        </li>
        <li>
          Organization: Custom hooks can help keep your code organized by
          separating out logic that is specific to a particular feature or
          behavior.
        </li>
      </div>
    </div>
  );
};

export default Blog;
