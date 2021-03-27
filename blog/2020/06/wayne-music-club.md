---
title: "New Site: Wayne Music Club"
excerpt: "Redesigned the web site for the Wayne Music Club, the organization that supports the band programs at Wayne High School."
date: "2020-06-11T13:36:00-04:00"
cover: "/assets/images/blog/wmc_cover.jpg"
---

## Background

If you haven't figured it out from random posts and twitterings, I'm a marching band dad. I have supported and volunteered with the Wayne Music Club (the organization that supports our high school band programs) for the past 6 years. And over the years I have seen their web site get a bit better with each iteration but it still wasn't what I thought it could be. At first it was built with tables, not updated much at all, and definitely not responsive to different devices. Then a couple of years ago, it was redesigned as a WordPress blog which was better in most aspects I'll admit. But it rubbed me wrong on how much it looked hurried and disorganized.

The music club's executive board is filled with volunteers who are elected each year, and this past fall I decided to run for the Drumbeat [newsletter] Editor & Webmaster position. I haven't seen that word used as an official role in a while but I would have to manage the site, hosting, and content so it seems traditionally fitting.

My main reason for running for the board position was to make information easy to find. If there was one thing I noticed in our group's Facebook posts, it was that people had some difficulty finding answers to a lot of common questions. And the answers to these could be found in a number of places; however, finding those places was a bit of a pain to accomplish without having a lot bookmarks to everything.

I got the position and in February I started planning how to go about the site makeover. I decided to keep its WordPress backend and use the WordPress REST API to my advantage. We could keep using WordPress's easy to use editors, plugins, and controls while I got to create exactly the site I wanted to make for them. Creating a minimal WordPress theme with no CSS, I set for WordPress to be used as a headless CMS with a JavaScript front-end.

## Web Technologies Used

- Vue & Vue CLI for the javascript framework & router
- Styling with Sass, CSS Grid, & Tailwind CSS
- WordPress REST API for accessing data & content
- Axios for REST connectivity
- WordPress Plugins
  - [Advanced Custom Fields](https://www.advancedcustomfields.com/) to create extra fields in posts
  - [ACF to REST API](http://github.com/airesvsg/acf-to-rest-api) to expose custom fields to the WP REST API
  - [Custom Post Type UI](https://github.com/WebDevStudios/custom-post-type-ui/) to manage different post types such as videos & events
  - [Envira Gallery](http://enviragallery.com/) for organizing photos into separate galleries

## What I Learned

### Querying with WP REST API, Axios, & Async/Await

This project gave me lot more practice with [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) especially in the form of [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) / [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await). There are multiple versions of similiar functions I wrote in [wp-api.js](https://github.com/aromig/wayneband/blob/master/src/wp-api.js) that return objects (or arrays of them) and though I could have copy/pasted (and changed where different), I made it a point to type it all out each time for sake of practice and ingraining it into memory.

### Building with Single File Components

I love working with Vue for its developer experience. Using its single file component structure not only gives me reusable pieces of code that I don't need to duplicate but also helps me visualize how the pages (and parent components) will come together.

![Wayneband.com Components](/assets/images/blog/2020-06-11_components.png)

This was also a great exercise in sending/receiving props and keeping the overall file structure organized.

### Using an Event Bus

There were a couple of situations where I needed different components communicating with each other in a event listener fashion.

1. On the [home page](https://github.com/aromig/wayneband/blob/master/src/views/Home.vue), the background behind the main logo needed to switch between a rotating background image queue and a video background via a toggle button located in the [navigation bar](https://github.com/aromig/wayneband/blob/master/src/components/NavBar.vue).

2. On the [events](https://github.com/aromig/wayneband/blob/master/src/views/Events.vue) page, the [calendar](https://github.com/aromig/wayneband/blob/master/src/components/Calendar.vue) component needed to highlight dates that had events scheduled on them (as well as today's date) and also make those dates clickable to scroll to the event clicked in the list on the page.

An event bus came in handy here, creating a bridge between two components without a lot of code. In my main src directory I had a 2 line Javascript called [event-bus.js](https://github.com/aromig/wayneband/blob/master/src/event-bus.js):

```javascript
import Vue from "vue";
export const EventBus = new Vue();
```

Yup, that's it. In each component/view that I needed to use it I had to import it, of course. i.e. `import { EventBus } from "@/event-bus";`

And within the method that I'm using the trigger the event, I send my event and its corresponding value out into the ether.

```javascript
EventBus.$emit("event-name", value);
``` 

On the receiving component's end, I set an event listener like this:

```javascript
EventBus.$on("event-name", (value) => {
  this.localvariable = value;
});
```

This simple implementation was all I needed to sort out those two issues where props couldn't help me.

### Using the Browser to Save Preferences

With the home page background toggle (images vs video), I wanted that choice to persist when the visitor returned to the page. In the past, I've dealt mostly with cookies but this time it seemed that there could be a better solution. Using the browser's built-in local storage sounded like a great way to achieve this, so I learned how to get & set values using this method and now it remembers this preference for the next visit.

### CSS Grid

I've used CSS Grid before to create dynamic layouts dependent on viewport size like on my [cakes](https://cakes.romig.dev) site and I loved the results as well as coding it. I got a lot more practice with it on a few sections of this site such as the calendar component and the photo & video pages. I kept the layouts simple for the most part except for the photo pages. There I wanted to create something more interesting with thumbnails are shown are different shapes and sizes.

![CSS Grid use on Photos page](/assets/images/blog/2020-06-11_cssgrid.png)

## Reception

I received an overwhelming positive response to the new web site design & features when I presented it to the rest of the executive board. I acted on feedback regarding a few minor tweaks and a mobile browser issue but nothing too major was needed. Within a month from the start of my project, I announced the new launch of the web site at the beginning of March to our club members.

I had a lot of fun with the overall design of the site. Between playing with Tailwind CSS, Sass, SVGs, and CSS Grid, I had hoped I created a fun and fresh new site for our organization and everyone would enjoy using it.

---

Web Site URL: [wayneband.com](https://wayneband.com)

Client: Wayne Music Club

[Github Repository](https://github.com/aromig/wayneband)