# udacity-nd001-p5
Project 5: Restaurant Reviews for Udacity Nano-degree Front End Web Developer

## Steps to run
- Download or clone the repo using `git clone https://github.com/BaineGames/udacity-nd001-p5.git`
- Extract into a webserver of choice, I am using VS Code LiveServer extentsion
- Open [index.html](../master/index.html) in browser

## Developer Notes
- Application is responsive - you can test by enabling dev console and turning on device mocking in chrome. Use the bar at the top of the browser to change device sizes. 
- Application is accessible - html code on display has proper labeling where appropriate to enable for screen readers.
- Application uses service worker for pre visited pages - you can visit a page, disable internet connection via network tab in chrome and refresh the page to see content still loads appropriately.
-- Note on the service worker, I set it up to cache any content that is not found in the cache. That way I can also cache things like map tiles and additional images if the source code is changed without updating the service worker cache payload array.

## Favicon Source
https://www.freeiconspng.com/img/4889
