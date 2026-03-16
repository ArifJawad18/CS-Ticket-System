1.What is JSX, and why is it used?
JSX  is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript files. While it looks like HTML, it is actually a powerful tool that brings the full capabilities of JavaScript to your UI.It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
It provides a familiar, visual way to describe what the user interface should look like. Most developers find it much easier to read and write than the complex, nested JavaScript function calls it replaces.Unlike traditional template languages, JSX allows you to embed any valid JavaScript expression (like variables, math, or function calls) directly inside the markup using curly braces 

2.What is the difference between State and Props?
State:
Managed inside a component.
The component can change it using setState or hooks like useState.
Used for data that updates over time form inputs, toggles, fetched data.
Props:
Passed from parent to child.
The receiving component cannot change them.
Used to configure a component or pass data/functions down.

3.What is the useState hook, and how does it work?
The useState hook in React allows function components to maintain their own internal state. When you call useState, you provide an initial value, and React returns an array containing the current state and a function to update it. When that update function is called, React re-renders the component with the new value, keeping the UI synchronized with the latest state. This state is preserved between re-renders and can hold any type of data, including numbers, strings, objects, or arrays. The hook is essential for building interactive components where values change over time, such as counters, form inputs, toggles, or data fetched from an API. 
It's works by letting React remember the state value across renders. On the first render, useState stores the initial value internally, then returns the current value plus a setter function. Calling the setter tells React to update the stored value and re-render the component, ensuring that the interface always reflects the most recent state while React efficiently updates only what has changed.

4.How can you share state between components in React?
share state between React components in several ways, depending on how the components are related and how widely the state needs to be used. The simplest method is lifting state up, where you move the shared state to a common parent component and pass it down to the children as props. For more complex situations where state must be accessed by components at different levels, the React Context API allows you to share data without passing props manually through every layer. When an application grows larger and the state becomes more complex, developers often use state management libraries like Redux, Zustand, or Recoil to handle shared or global state in a structured way. In routing-based applications, some state can also be shared through the URL, such as using query parameters or dynamic routes. Additionally, custom hooks enable you to extract and reuse logic across multiple components, allowing them to share behavior without sharing UI.

5.How is event handling done in React?
Event handling in React is done using event handlers that are written in camelCase and passed as functions, rather than strings like in regular HTML. Instead of writing events directly inside HTML attributes, React attaches them using JSX, such as onClick, onChange, or onSubmit. These event handlers are typically defined as functions inside the component, and React automatically wraps events in a synthetic event system, which ensures consistent behavior across different browsers. When an event occurs, React calls the corresponding function, allowing you to update state, run logic, or handle user interactions. Overall, React’s event system provides a clean, predictable way to manage user actions while keeping UI and logic organized within components.
