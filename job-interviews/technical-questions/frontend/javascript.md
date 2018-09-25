## JS Questions

### Explain how this works in JavaScript

1. object method invocation
2. global invocation
3. bind
4. apply, call
5. arrow function

### What is a “closure” in JavaScript? Provide an example.

Inner function can access to its parent scope variable even when the parent function has been returned.

### What's the difference between .call and .apply?

- `call` and comma-separated
- `apply` and an array of arguments.

```js
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

[[↑] Back to top](#js-questions)

### What's the difference between an "attribute" and a "property"?

When writing HTML source code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.

[[↑] Back to top](#js-questions)

### Explain what a single page app is and how to make one SEO-friendly.

In modern SPAs, client-side rendering is used instead. The browser loads the initial page from the server, along with the scripts (frameworks, libraries, app code) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. The URL of the page is updated via the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). New data required for the new page, usually in JSON format, is retrieved by the browser via [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.

The benefits:

- The app feels more responsive and users do not see the flash between page navigations due to full-page refreshes.
- Fewer HTTP requests are made to the server, as the same assets do not have to be downloaded again for each page load.
- Clear separation of the concerns between the client and the server; you can easily build new clients for different platforms (e.g. mobile, chatbots, smart watches) without having to modify the server code. You can also modify the technology stack on the client and server independently, as long as the API contract is not broken.

The downsides:

- Heavier initial page load due to the loading of framework, app code, and assets required for multiple pages.
- There's an additional step to be done on your server which is to configure it to route all requests to a single entry point and allow client-side routing to take over from there.
- SPAs are reliant on JavaScript to render content, but not all search engines execute JavaScript during crawling, and they may see empty content on your page. This inadvertently hurts the Search Engine Optimization (SEO) of your app.

### How do you check if an object is an array or not?

```
Array.isArray(obj)
```

```
obj instanceof Array
```

### What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

- To avoid polluting the global scope.
- To avoid overriding already existing variables.

### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace.

### How do you organize your code? (module pattern, classical inheritance?)

I use React/Redux which utilize a single-directional data flow based on Flux architecture. I would represent my app's models using plain objects and write utility pure functions to manipulate these objects. State is manipulated using actions and reducers like in any other Redux application.

### Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?

The main difference between `.forEach` and `.map()` is that `.map()` returns a new array.

### Explain Function.prototype.bind.

```ts
const bind = (this: context, ...args): function => {}
```

### What's a typical use case for anonymous functions?

- Callback Function
- Immediately-invoked function expression

### What is the difference between undefined and not defined in JavaScript?

- not defined: variable doesn't exist
- undefined: variable existed but not assign any value

### What are the differences between variables created using let, var or const?

- let and const are block scoped

### How do you clone an object?

```
Object.assign()
```

### Explain the difference between mutable and immutable objects.

### Difference between: function Person(){}, var person = Person(), and var person = new Person()?

1. function
2. invoke function
3. creates an instance of the Person object

###### References

- https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/javascript-questions.md#why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it
