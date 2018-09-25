# System Design Questios

### How would you design a URL Shortener?

![screen shot 2018-09-25 at 10 24 35](https://user-images.githubusercontent.com/11765228/45989231-599aea00-c0ad-11e8-9ba3-7afe4ee024ac.png)

### How would you design a Cache System?

One of the most common cache systems is LRU (least recently used).

When resource A is requested, we check the hash table to see if A exists in the cache. If exists, we can immediately locate the corresponding queue node and return the resource. If not, we’ll add A into the cache. If there are enough space, we just add a to the end of the queue and update the hash table. Otherwise, we need to delete the least recently used entry. To do that, we can easily remove the head of the queue and the corresponding entry from the hash table.

http://blog.gainlo.co/index.php/2016/05/17/design-a-cache-system/

### How would you design a Recommendation System?

### How would you design a Web Crawler?

- Start with a URL pool that contains all the websites we want to crawl.
- For each URL, issue a HTTP GET request to fetch the web page content.
- Parse the content (usually HTML) and extract potential URLs that we want to crawl.
- Add new URLs to the pool and keep crawling.

### How would you design a Photo Sharing App?

### How would you design a Hit Counter?

###### References

- https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/web_crawler
