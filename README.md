# Crash Course React

Here’s a crash course on React, covering the basics. This will help you get started with React and build simple applications. We’ll go through the following topics:

1. **Introduction to React**
2. **Setting Up the Environment**
3. **Creating Your First React Component**
4. **JSX Syntax**
5. **Props and State**
6. **Event Handling**
7. **Lifecycle Methods**
8. **Basic Routing with React Router**
9. **Handling Forms**
10. **Basic Hooks**

### 1. Introduction to React

React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. It allows you to create reusable UI components.

### 2. Setting Up the Environment

To start using React, you'll need Node.js and npm (Node Package Manager) installed. You can download them from [nodejs.org](https://nodejs.org/) .
You can create a new React app using Create React App, a tool that sets up a new React project with sensible defaults.

```bash
npx create-react-app my-app
cd my-app
npm start
```

### 3. Creating Your First React Component

React components can be created as JavaScript functions or classes. Here’s an example of a functional component:

```jsx
// src/App.js
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

### 4. JSX Syntax

JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write elements and components in a way that resembles HTML. React components use JSX to describe what the UI should look like.

Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

### 5. Props and State

- **Props** : Short for properties, these are read-only and used to pass data from a parent component to a child component.

```jsx
// src/Welcome.js
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

```jsx
// src/App.js
import React from "react";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Mike" />
      <Welcome name="Laura" />
    </div>
  );
}

export default App;
```

- **State** : State is used to store data that can change over time. It’s managed within the component.

```jsx
// src/Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

### 6. Event Handling

React allows you to handle events such as clicks and form submissions.

```jsx
// src/App.js
import React from "react";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
```

### 7. Lifecycle Methods

Class components have lifecycle methods that allow you to run code at specific points in the component’s lifetime. Functional components can use hooks like `useEffect` to achieve similar functionality.

```jsx
// src/Example.js
import React, { useEffect } from "react";

function Example() {
  useEffect(() => {
    // This runs after the component mounts
    console.log("Component mounted");
    return () => {
      // This runs before the component unmounts
      console.log("Component unmounted");
    };
  }, []); // Empty array means this effect runs only once

  return <div>Check the console for lifecycle messages.</div>;
}

export default Example;
```

### 8. Basic Routing with React Router

To handle routing in a React application, you can use the `react-router-dom` library.
First, install it:

```bash
npm install react-router-dom
```

Then, set up basic routing:

```jsx
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```

### 9. Handling Forms

React makes form handling straightforward. Here’s a basic example of a controlled form:

```jsx
// src/ContactForm.js
import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
```

### 10. Basic Hooks

Hooks are a way to use state and other React features without writing a class. Some common hooks are `useState`, `useEffect`, and `useContext`.Here’s an example using `useState` and `useEffect`:

```jsx
// src/HookExample.js
import React, { useState, useEffect } from "react";

function HookExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default HookExample;
```

### Conclusion

This crash course covered the essentials of React to get you started. There’s a lot more to explore, including advanced hooks, context, performance optimization, and testing. The React documentation is an excellent resource for further learning: [React Documentation]() .
