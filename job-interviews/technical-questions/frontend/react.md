## React Questions

### What are pure functional Components?

If we have no intention for a Component to need state, or to need lifecycle methods, we can actually write Components with a pure function, hence the term “pure functional Component”:

```cs
function Date(props){
    let {msg="The date is:"} = props
    let now = new Date()
    return <div>
        <span>{msg}</span>
        <time>{now.toLocaleDateString()}</time>
    </div>
}
```

[[↑] Back to top](#react-questions)

### List some of the major advantages of React.

1. It increases the application’s performance
2. It can be conveniently used on the client as well as server side
3. Because of JSX, code’s readability increases
4. React is easy to integrate with other frameworks like Meteor, Angular, etc
5. Using React, writing UI test cases become extremely easy

[[↑] Back to top](#react-questions)

### What are the limitations of React?

1. React is just a library, not a full-blown framework
2. Its library is very large and takes time to understand
3. It can be little difficult for the novice programmers to understand
4. Coding gets complex as it uses inline templating and JSX

[[↑] Back to top](#react-questions)

### Explain the purpose of render() in React.

Each React component must have a render() function. It returns a single React element which is the representation of the native DOM component.

[[↑] Back to top](#react-questions)

### What do you understand from “In React, everything is a component.”?

Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

[[↑] Back to top](#react-questions)

### What is the significance of Store in Redux?

A store is a JavaScript object which can hold the application’s state and provide a few helper methods to access the state, dispatch actions and register listeners.

[[↑] Back to top](#react-questions)

### Explain the role of Reducer.

```
action -> reducer (pure function) -> new state -> stroe
```

[[↑] Back to top](#react-questions)

### What is an event in React?

```
action -> reducer (pure function) -> new state -> stroe
```

[[↑] Back to top](#react-questions)

### What is an event in React?

In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:

- Events are named using camel case instead of just using the lowercase.
- Events are passed as functions instead of strings.

### What were the major problems with MVC framework?

- DOM manipulation was very expensive
- There was huge memory wastage
- Because of circular dependencies, a complicated model was created around models and views

### What is a state in React and how is it used?

States are in the ecah component. They are accessed via `this.state`.

###### References

- https://www.edureka.co/blog/interview-questions/react-interview-questions/
- https://www.toptal.com/react/interview-questions
