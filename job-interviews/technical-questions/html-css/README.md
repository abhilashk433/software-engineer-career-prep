# HTML

### Describe the difference between <script>, <script async> and <script defer>.

```
<script>
```

1. Pause parsing the document.
2. Make a request to fetch the file.
3. Execute the script after it has been downloaded.
4. Resume parsing the document.

```
<script async>
```

1. Make parallel requests to fetch the files.
2. Continue parsing the document as if it was never interrupted.
3. Execute the individual scripts the moment the files are downloaded.

```
<script defer>
```

1. Make parallel requests to fetch the individual files.
2. Continue parsing the document as if it was never interrupted.
3. Finish parsing the document even if the script files have downloaded.
4. Execute each script in the order they were encountered in the document.

### Describe the difference between a cookie, sessionStorage and localStorage.

LocalStorage:

- Web storage can be viewed simplistically as an improvement on cookies, providing much greater storage capacity. Available size is 5MB which considerably more space to work with than a typical 4KB cookie.
- The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - reducing the amount of traffic between client and server.
- The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.
- It works on same-origin policy. So, data stored will only be available on the same origin.

Cookies:

- We can set the expiration time for each cookie
- The 4K limit is for the entire cookie, including name, value, expiry date etc. To support most browsers, keep the name under 4000 bytes, and the overall cookie size under 4093 bytes.
- The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - increasing the amount of traffic between client and server.

sessionStorage:

- It is similar to localStorage.
- Changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted
- The data is available only inside the window/tab in which it was set.
- The data is not persistent i.e. it will be lost once the window/tab is closed. Like localStorage, it works on same-origin policy. So, data stored will only be available on the same origin

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

It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.
It forces to write cleaner code in respect to responsive CSS rules.

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
