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

###### References

- https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/html-questions.md
