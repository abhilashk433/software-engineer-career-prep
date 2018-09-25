# CSS

### What is the CSS display property and can you give a few examples of its use?

inline

Displays an element as an inline element (like <span>). Any height and width properties will have no effect

block

Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width

inline-block

Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values

### Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?

Note that these two 2 approaches are not exclusive.

Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.

```css
@media (min-width: 601px) {
  .my-class {
    font-size: 24px;
  }
}
@media (max-width: 600px) {
  .my-class {
    font-size: 12px;
  }
}
```

A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later. Following the previous example:

```css
.my-class {
  font-size: 12px;
}

@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```

A mobile-first strategy has 2 main advantages:

- It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.
- It forces to write cleaner code in respect to responsive CSS rules.

### What's the difference between a relative, fixed, absolute and statically positioned element?

A positioned element is an element whose computed position property is either relative, absolute, fixed or sticky.

- static - The default position; the element will flow into the page as it normally would. The top, right, bottom, left and z-index properties do not apply.
- relative - The element's position is adjusted relative to itself, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned).
- absolute - The element is removed from the flow of the page and positioned at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.
- fixed - The element is removed from the flow of the page and positioned at a specified position relative to the viewport and doesn't move when scrolled.
- sticky - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.

### What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

- Resetting - Resetting is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.
- Normalizing - Normalizing preserves useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.

I would choose resetting when I have a very customized or unconventional site design such that I need to do a lot of my own styling and do not need any default styling to be preserved.

### What are the advantages/disadvantages of using CSS preprocessors?

Advantages:

- CSS is made more maintainable.
- Easy to write nested selectors.
- Variables for consistent theming. Can share theme files across different projects.
- Mixins to generate repeated CSS.
- Splitting your code into multiple files. CSS files can be split up too but doing so will require an HTTP request to download each CSS file.

Disadvantages:

- Requires tools for preprocessing. Re-compilation time can be slow.

### What are the different ways to visually hide content (and make it available only for screen readers)?

- `width: 0; height: 0.` Make the element not take up any space on the screen at all, resulting in not showing it.
- `position: absolute; left: -99999px.` Position it outside of the screen.

### Describe pseudo-elements and discuss what they are used for.

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).

Like:

1. `:first-line` and `:first-letter` can be used to decorate text.
2. Triangular arrows in tooltips use `:before` and `:after`.

### How would you approach fixing browser-specific styling issues?

- Use libraries like Bootstrap that already handles these styling issues for you.
- Use autoprefixer to automatically add vendor prefixes to your code.
- Use Reset CSS or Normalize.css.

###### References

- https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/css-questions.md
