---
title: Build Right Workshop with Wes Bos
excerpt: "After attending another Build Right workshop, I learned more about JavaScript/ES6 including Promises, Async + Await, Modules, and Service Workers"
date: "2018-06-11T13:26:21-04:00"
---

I had been waiting patiently for a few months to find out who would be the speaker for the next [Build Right](https://buildright.io/) [Makers Series](https://buildright.io/maker-series/) workshop and I finally heard the news at a recent [Dayton Web Developers](https://www.meetup.com/dayton-web-developers/) meetup that it would be [Wes Bos](https://wesbos.com). Wes is a full-stack developer from Hamilton, Canada, who creates very easy-to-understand web development tutorial videos such as [JavaScript30](https://javascript30.com), [CSSGrid](https://cssgrid.io/), and [ES6 for Everyone](https://es6.io/).

I have worked through JavaScript30 and CSSGrid and he has a very natural talent of teaching and walking you through his hands-on courses. I especially like that his courses will have a flub or two - actual mistakes that he will troubleshoot to get it back in order, giving you a glimpse at a real coding experience.

We started from scratch on building a web application that would ultimately utilize our laptop cameras, manipulate the image, and let us download snapshots all the while teaching us about the key areas of the day's lessons.

---

## Promises

Fetching data can be easy but when you are doing this in concert with other things within the same application, it can get messy when calls to APIs do not happen in the order that you want them. Enter Promises. Wes explained that promises are an IOU for something that will happen in the future such as an ajax call that will return data, access to a user's webcam, or even resizing an image. This gives our call a placeholder for data that will come back in the future (whether it be instantaneous or not so much). This allows whatever comes next to not happen until our code has fulfilled that promise. Otherwise, JavaScript just keeps going and going without regard to what you want it to do.

Before we could achieve this through nesting callbacks but if you get too many going one after another, you can end up in "[callback hell](http://callbackhell.com/)" like so:

```js
getTheWeatherFor(
  "Dayton",
  function(weather) {
    getPicturesOfWeather(
      weather,
      function(pictures) {
        resizePicturesOfWeather(
          pictures,
          function(resizedPictures) {
            uploadNewPictures(
              resizedPictures,
              function() {
                console.log("Finally Done!");
              },
              function(err) {
                handleError(err);
              }
            );
          },
          function(err) {
            handleError(err);
          }
        );
      },
      function(err) {
        handleError(err);
      }
    );
  },
  function(err) {
    handleError(err);
  }
);
```

This can get messy fast and then we can further complicate it with more sequential tasks, tasks that could run at the same time, and even with error handling. Other languages like PHP or C# can read lines of code from top to bottom waiting its turn, but JavaScript doesn't play like that. It doesn't wait for anything. WIth promises, JavaScript technically still doesn't wait - it gets returned a promise of data which gets passed into a `.then()` function which listens for it, resolving the promise. Thus we can turn the above into:

```js
getTheWeatherFor("Dayton")
  .then(weather => getPicturesOfWeather(weather))
  .then(pictures => resizePicturesOfWeather(pictures))
  .then(resizedPictures => uploadNewPictures(resizedPictures))
  .then(() => {
    console.log("Done!");
  })
  .catch(err => {
    console.log("Something Happened!", err);
  });
```

---

## Async + Await

While promises are awesome, Wes also introduced us to a new way to write asynchronous code. Async + Await is just additional syntax on top of promises - it doesn't replace it. The thing is with plain ol promises, we can get into a situation where a section of code is waiting for the first part to complete. We still want to keep it going - just not chaotically.

First we define a function around our code as asynchronous with the `async` keyword. Then use the `await` keyword in front of the functions that we want to resolve their promise before continuing. See the above example with async + await below:

```js
async function go() {
  const weather = await getTheWeatherFor("Dayton");
  const pictures = await getPicturesOfWeather(weather);
  const resizedPictures = await resizePicturesOfWeather(pictures);
  console.log("Gonna upload them now");
  await uploadNewPictures(resizedPictures);
  console.log("Done!");
}
```

And error handling can still exist by using try/catch blocks or a high order function.

---

## ES6 Modules

Wes showed us the benefits of using modules in our JavaScript:

- No relying on the global scope
- Sharing code between projects is easier
- Standard system for sharing code with open source projects
- Allows us to build tooling and libraries that are focused
- Easy dependency management

With modules we can limit the scope of the module's code to itself, explicitly import functions to other files where and when we need them, and even pick & choose which portions of libraries we want to use without importing everything.

---

## Service Workers

I learned that service workers are scripts that can run in the background of the browser, in its own thread, giving us abilities like:

- Caching files
- Intercepting network requests
- Running code when the user isn't on the page yet

This allows for desktop app-like features such as:

- Background synchronization
- Offline access
- Push notifications

---

## A Fun & Learned Time

Being able to learn these concepts in this workshop was absolutely brilliant and I am glad I had the opportunity to be there. I look forward to other Makers Series workshops [Sparkbox](https://seesparkbox.com/) will offer in the future.

![Testing my camera app](/assets/images/blog/br_wesbos.jpg)
