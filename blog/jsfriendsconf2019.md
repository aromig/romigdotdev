---
title: "JavaScript and Friends Conference"
excerpt: "My first developer conference was quite an experience. Here are the talks I attended & what I learned from them."
date: "2019-08-13T11:36:00-04:00"
cover: "/assets/images/blog/jsandfriends.jpg"
---

Earlier this month on Friday, August 2, I attended my first developer conference. I had been looking for more learning opportunities and when I heard that there was going to be a conference somewhat local to me, I thought it would be a good experience for me to take part in. I could learn from multiple speakers on a variety of topics within a day. With only an hour for each talk, I knew I wasn't going to walk away with fully knowing a new skill or two but possibly I could take away enough to motivate me to seek out more information about some of them.

So I decided to attend the first [JavaScript and Friends](https://www.javascriptandfriends.com/) conference in Columbus, Ohio. JS&Friends is a not-for-profit conference that uses its proceeds to help cultivate the local (and remote) developer community in education and inclusivity. The [schedule](https://www.javascriptandfriends.com/schedule) was packed with a lot of interesting talks about everything JavaScript - it was hard to choose which sessions to attend.

## Starting the morning

Early Friday morning came and I was on the road to the Quest Conference Center off the far side of the loop (I-270 around Columbus). Arriving a bit early, the organizers let me know to help myself to breakfast while they get the attendee badges sorted. Great job on that, by the way! 👍️ Props to the fruit selection. I got my badge shortly after and waited for the welcome message to everyone before going to my first session. I made some notes on the session sheet they gave me for a possible plan of where to go. I still wasn't 100% sure which ones I was going to but was narrowing it down.

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Getting ready for a full day of learning all sorts of stuff at <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a>. <a href="https://t.co/XJp31WMksB">pic.twitter.com/XJp31WMksB</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157269249913708544?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

Below are summaries of the sessions I did attend. To trim down overall length, the more detailed and technical information can be found in expandable blocks in some sections.

---

Jump to:

- [Pros & Cons of Vue vs React - Milu Franz](#pros--cons-of-vue-vs-react---milu-franz)
- [Mastering Shadow DOM - Martine Dowden](#mastering-shadow-dom---martine-dowden)
- [Test Them JavaScripts - Rob Tarr](#test-them-javascripts---rob-tarr)
- [Lunch Keynote - Guy Royse](#lunch-keynote---guy-royse)
- [Querying NoSQL with SQL - Matthew Groves](#querying-nosql-with-sql---matthew-groves)
- [Creating HTML tags with Vue & Web Components - Joe Erickson](#creating-html-tags-with-vue--web-components---joe-erickson)
- [DevOps+IoT+Security - Diana Rodriguez](#devopsiotsecurity---diana-rodriguez)

---

## Pros & Cons of Vue vs React - [Milu Franz](https://twitter.com/milu_franz)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_franz.png" alt="Milu Franz" class="circle-crop">
</div>

Milu Franz of [Mile Two](https://www.miletwo.us/) gave a great presentation comparing the advantages and drawbacks of both Vue and React. I'm novicely versed in building with Vue but I was interested in how it compares to the more popular React library.

<details>
  <summary>Detailed notes</summary>

She showed that Vue is a progressive framework which includes official packages for state management and routing, whereas React is a library concentrating on UI development but has external third party packages for state management and routing. Also she explained the differences between Vue's template syntax, where it combines the markup, logic, and styling (as separate sections) in one _single file component_, and React's format, where markup is included inside the JavaScript code as JSX and styling is imported from an external .css file (unless using CSS-in-JS). Note that Vue components can also be modeled in the same fashion as React ones, if desired for more intricate customization, but the template syntax is a preferable method of designing most types of components.

Milu went over building the same To Do List project in both Vue & React, going over Vue's concepts of using interpolation in the markup (to insert JavaScript) and directives such as _v-model_ for two-way data binding of state (that really can be described as _magical_). This is compared to React where explicit defining of state (through the useState hook) is required. The key differences are that Vue abstracts handling state so you only need to _directly_ update a value (versus using a function to update it) and that Vue will only re-render what changed while React might re-render everything in that component's subtree structure.

Lifecycle method differences were explained as well as React's useEffect hook. Run-time performance was also compared with both being more performant depending on the use case. Milu even went over drawbacks to each: Vue with potential over-flexibility and lack of resources; and React with its steep learning curve, lack of native libraries, and difficulty in collaborating with designers (harder to translate to markup when JSX is required).

</details>

My take from the presentation was that React is still more popular - it's been out longer and there's something that captivates developers to write it all in JavaScript, but Vue is catching up in terms of maturity, performance, and use cases. Both are fully able to help developers create engaging applications. I'm more of a Vue fan, obviously, but I can see why developers are attracted to it for their projects. For me, though, I really like the template markup as I can more easily visualize the layout without all the JavaScript around it. I also don't mind that Vue handles the state so magically for me. Abstract it away and make the process easier.

I'm sure there are plenty of other technical differences and opinions that make one _better than the other_ but I look at it like I do with other technologies: Use what you like and what works. And keep the solution simple.

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Great talk by <a href="https://twitter.com/milu_franz?ref_src=twsrc%5Etfw">@milu_franz</a> comparing Vue &amp; React. I can see the allure of writing it all in JS (React) but the ability to visualize the app &amp; components with the template syntax is what hooks me to Vue. <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157290744169816064?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

---

## Mastering Shadow DOM - [Martine Dowden](https://twitter.com/martine_dowden)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_dowden.jpg" alt="Martine Dowden" class="circle-crop">
</div>

Martine showed us how to create web components using just HTML and vanilla JavaScript - that's right, no framework!

We learned what Web Components and Custom Elements are as well as how the Shadow DOM works to give us the ability for encapsulated reusable components. After reviewing basic DOM manipulation with JavaScript, she showed us how to create a web component using those techniques by bringing back the `<blink>` tag!

<details>
  <summary>Detailed notes</summary>

**Defining our tag**

JavaScript

```javascript
// blink.js
const Blink = (function() {
  "use strict";

  class Component extends HTMLElement {
    constructor() {
      super();
      // Create shadow root
      const shadow = this.attachShadow({
        mode: "open"
      });

      // Wrap text content with a span tag
      const wrapper = document.createElement("span");

      // Make a slot for text
      const slot = document.createElement("slot");
      slot.setAttribute("name", "content");
      wrapper.appendChild(slot);

      // CSS animation styles
      const style = document.createElement("style");
      style.textContent = `
        @keyframes blink {
          0%   { visibility: hidden; }
          50%  { visibility: hidden; }
          100% { visibility: visible; }
        }
        /* :host selects shadow root host */
        :host { animation: 1s linear infinite blink; }
      `;

      // Append
      shadow.appendChild(wrapper);
      wrapper.appendChild(style);
    }
  }
  customElements.define("wc-blink", Component); // can't use <blink> - it's still reserved
})();

export { Blink };
```

**Putting it to use**

HTML

```html
<script>
  import { Blink } from "./blink.js";
</script>

<!-- prettier-ignore -->
<wc-blink>
  <h1 slot="content">
    Look Ma, I'm blinking!
  </h1>
</wc-blink>
```

</details>

I learned a bunch in this session on how the Shadow DOM is used to make custom elements and the benefits & limitations of such. I walked away with an understanding that it is possible to create a component-based site/application without a framework if need be. Though certainly the additional features of a framework may outweigh the freedom of independence, it is good to know there are options.

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Interesting presentation about creating components using vanilla JS &amp; the shadow DOM by <a href="https://twitter.com/Martine_Dowden?ref_src=twsrc%5Etfw">@Martine_Dowden</a>. Nice to understand how to do this if I can’t use a framework. And possibly make my own component library. 🤯 <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157302805037813760?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

---

## Test Them JavaScripts - [Rob Tarr](https://twitter.com/robtarr)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_tarr.jpg" alt="Rob Tarr" class="circle-crop">
</div>

Rob of [Sparkbox](https://seesparkbox.com) started his discussion on testing with a few questions for us:

- What does testing mean to your team?
- How do you test?
- How often do you test?

Some answers:

- Piece of mind, consistency
- Manually in browser, while developing (TDD), with testing libraries
- Rarely, all the time, during CI, before pushing to repository

He continued with why we test our code. It does give us piece of mind & consistency as well as giving confidence in the code and ourselves & designing better software because of it. But where do we start - especially when web development has had a culture _not testing_ for so long? For whatever reasons, it's hard, there's no time or it's just an afterthought.

Rob listed out a few testing frameworks: Mocha, Ava, Jest, & Jasmine; though he was going to concentrate on Mocha (with the Chai add-on) for this short session. He mentioned different _runners_ to use to initiate the tests: Grunt, Gulp, Karma, Make, npm.

Establishing boundaries of what to test is a very important point so that time is not wasted testing things that were (probably) already tested. He called it the concept of mowing your own yard. Don't test libraries and APIs. Just test _your_ code.

I believe there was supposed to be more to the talk and possibly examples of how to start writing the tests - where do I begin? But with only 50 minutes available, it may have been cut short of that. I am aware of my knowledge gap in automated testing and I will definitely educate myself more on it.

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">A lot of information from <a href="https://twitter.com/robtarr?ref_src=twsrc%5Etfw">@robtarr</a> about code testing. It’s definitely something I need to learn more of. <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157319905340993539?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

---

## Lunch Keynote - [Guy Royse](https://twitter.com/guyroyse)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_royse.jpg" alt="Guy Royse" class="circle-crop">
</div>

During lunch, Guy gave a short informal talk on the linguistics of code, specifically how programming is mainly in English and how code routines would look if they were in another language, such as Spanish.

Not only changing the words but the _sentence structure_ as well. He pointed out that our function calls also follow the English structure, i.e. _noun.verb(object)_. He then showed us in detail how we could translate our a common FizzBuzz function into Latin.

It was an amazing ride. I'd still like to see a framework coded in a Yoda-based structure (_object(noun).verb_ ??).

---

## Querying NoSQL with SQL - [Matthew Groves](https://twitter.com/mgroves)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_groves.jpg" alt="Matthew Groves" class="circle-crop">
</div>

I had always wanted to read up more on NoSQL databases and how they differ from relational databases. I have worked with SQL for 14 years so the relational design & structure is strong in how I think of table schema.

Matthew explained the benefits of using NoSQL over SQL: scalability (spin up more servers or cluster them if needed), flexiblity (no strict schema needed), and performance. He noted that we don't have to totally abandon relational databases - they can coexist.

<details>
  <summary>Detailed notes</summary>

While relational databases link separate tables by foreign keys, the JSON document model (the format NoSQL uses) can place related data in the same document as the main record. These extra pieces might be array objects if it contains more than one instance of child data. Other documents for seperate concepts can be created and referenced by a key.

Once he explained the concepts behind NoSQL, he showed us that queries (very similar to SQL's) can be created to find data. This is called N1QL (pronounced _nickel_) which is a Couchbase-centric query language. Azure Cosmos has something similar as well. Other NoSQL platforms would need to use aggregate functions which, to me, don't look very readable at first glance.

```sql
SELECT field
FROM `bucket` /* buckets contain logical groups of data-items */
WHERE otherfield = somevalue
/* JOINs are possible too! */
JOIN `otherbucket` ON (bucket.id = META(otherbucket).id)
LIMIT number;
```

N1QL queries return JSON objects that we can parse in our native coding language.

  </summary>
</details>

If there's anything to take away from this talk, Matthew says it's these 3 things:

- Pick the right application. Whether it's NoSQL or SQL, use what makes sense.
- JSON data is modeled differently. The structure of a document may be very different than a table.
- Query NoSQL data with SQL. So much easier to write.

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">I may have strayed from learning NoSQL because of the odd query format in JS but the talk from <a href="https://twitter.com/mgroves?ref_src=twsrc%5Etfw">@mgroves</a> has educated me that I can use my familiarity with SQL to do this. Way cool. 🤯 <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157347806660780035?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

---

## Creating HTML tags with Vue & Web Components - [Joe Erickson](https://twitter.com/firstclown)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_erickson.jpg" alt="Joe Erickson" class="circle-crop">
</div>

Joe of [Tech Elevator](https://www.techelevator.com/) gave a talk about creating web components. Similar to a previous talk; however, Joe's spin on it involved creating the them using Vue.

Joe flashed us back to 1997:

- Deep Blue beats Kasparov
- Microsoft buys a stake in Apple, saving the company
- Harry Potter and the Philosopher's Stone was published
- **All major browsers supported the `<blink>` tag**

And he intended that day to bring it back, at least for right then. Joe went through the steps to scaffold the initial code with Vue CLI and write out the component itself (using a different method of creating the blink animation).

<details>
  <summary>Detailed notes</summary>

### Creating the component

Using Vue's template syntax, the component can be written in separate blocks for markup, logic, and styling.

Blink.vue

```html
<template>
  <span ref="blinkyText"><slot /></span>
</template>

<script>
  export default {
    name: "blink",
    props: {
      interval: {
        type: Number,
        default: 500
      }
    },
    mounted() {
      setInterval(() => {
        this.$refs.blinkyText.classList.toggle("onoff");
      }, this.interval);
    }
  };
</script>

<style>
  .onoff {
    visibility: hidden;
  }
</style>
```

### Building the component

By default Vue CLI sets its scripts to build an application. The _build_ script needs to be tweaked a little.

package.json

```json
...
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build --target wc --name my-blink 'src/components/Blink.vue'",
  "lint": "vue-cli-service lint"
},
...
```

Now `npm run build` can be executed and it will be created in the dist folder. Inserted the component into a page entails including the blink.js file as well as the Vue script - and don't forget the tag itself!

```html
<meta charset="utf-8" />
<title>my-blink demo</title>
<script src="https://unpkg.com/vue"></script>
<script src="./my-blink.js"></script>

<my-blink interval="1000">Blink every second</my-blink>
```

</details>

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Learning some neat stuff with web components again. This time from ⁦<a href="https://twitter.com/firstclown?ref_src=twsrc%5Etfw">@firstclown</a>⁩. <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a> <a href="https://t.co/XtpM2fKl7V">pic.twitter.com/XtpM2fKl7V</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157367223230640130?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

Joe also gave us examples of real and useful components that he has made, how they can interact with each other, and how to build them all at once. And just because they were built with Vue doesn't mean they have to be used in a completely Vue-made app. They can be used in a plain HTML page as long as the Vue script is called.

While the discussion and concepts were similar to Martine's, knowing there is a different way to create a component that can be used freely in non-frameworked sites is great to know.

## DevOps+IoT+Security - [Diana Rodriguez](https://twitter.com/cotufa82)

<div class="article_photo" style="width: 150px">
  <img src="/assets/images/blog/jsfriends_rodriguez.jpg" alt="Diana Rodriguez" class="circle-crop">
</div>

Diana delivered a very insightful talk about the link between DevOps, IoT (Internet of Things), and security. It comes down to collaboration and feedback.

DevOps is about collaboration between development and operations. Diana gave us this passage from the Vue.js docs regarding the effects of DevOps:

> The adoption of DevOps culture, tools and agile engineering practices has, among other things, the nice effect of increasing the collaboration between the roles of development and operations. One of the main problems of the past (but also today in some realities) is that the dev team tended to be uninterested in the operation and maintenance of a system once it was handed over to the ops team, while the latter tended to be not really aware of the system’s business goals and, therefore, reluctant in satisfying the operational needs of the system (also referred to as “whims of developers”).
>
> &mdash; [Vue.js Docs](https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html#Effects-of-DevOps)

What this means is that DevOps works to bring solutions together for the benefit of the development and operations teams. For example, they may suggest using containers (like Docker) to limit the differences between the environment of a developer's laptop and the production server.

She explained that efficient DevOps will also provide faster feedback which bring about quicker & better enhancement/repairs as well as insight around performance and usage. With IoT, feedback regarding device performance and usage is analyzed and used to tune the product's quality for everyone's benefit.

The part of Diana's talk regarding security was eye-opening.

<div class="tweet-container" style="display: none">
  <blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Insightful talk by <a href="https://twitter.com/cotufa82?ref_src=twsrc%5Etfw">@cotufa82</a> on devops, IoT, and security. Staggering survey results on how much faith people have about IoT device security. 😱 <a href="https://twitter.com/hashtag/jsfriendsconf?src=hash&amp;ref_src=twsrc%5Etfw">#jsfriendsconf</a><br><br>I believe it. People will unknowingly trade personal information and security for some convenience. <a href="https://t.co/kRt708DhDt">pic.twitter.com/kRt708DhDt</a></p>&mdash; Adam Romig 🐧 🇵🇭 (@adam_romig) <a href="https://twitter.com/adam_romig/status/1157379845418078208?ref_src=twsrc%5Etfw">August 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

There is a huge lack of faith in the security of IoT devices by not only customers but _developers_ too.

Of those surveyed:

> - <small>52% believe that most IoT devices on the market right now DO NOT have the necessary security in place</small>
> - <small>49% don’t trust having their personal/private data tied to IoT devices – but still use them</small>
> - <small>Only 18% trust having their personal data tied to IoT devices</small>
> - <small>Nearly 35% claimed that the breaches of major companies have not had much of an effect on the trust or consumer interest in these brands</small>
> - <small>85% of developers surveyed have felt rushed to get an application to market due to demand/pressure in the last 6 months</small>
> - <small>90% of developers surveyed do not believe that IoT devices on the market currently have the necessary security in place</small>

Not only IoT devices for smart homes are potentially security-light but wearables as well. Peoples' biometric data is out there in the cloud which can sound kind of scary. Imagine how you would feel in the case of a data breach. 😱 How much personal information and security are people willing to unknowingly give out in the name of convenience?

Why aren't more developers/companies focused more on security instead of delivering a product quickly? The answer is mostly about money unfortunately. Companies also deter from seeking outside consultation because _people don't like being told what they're doing wrong_.

Diana then gave suggestions on what to concentrate on for increased device security: secure update processes, authentication, encryption, & independent security assessments to name a few.

At the end there were a few questions to ask yourself regarding your own IoT usage.

- What devices are we using?
- What information do we share?
- What information do we have access to?

It was a very interesting presentation focusing on collaboration, capturing valuable feedback, and being security-minded. There was so much information - one of the best talks that day.

## Mentoring Panel & Closing

After the last session, JS&Friends hosted a panel of speakers who gave their insights and experiences on mentoring, answering questions from the rest of us. There were great questions and answers, unfortunately I cannot remember them in detail - I just know it was a good and helpful discussion. I was so focused on listening that I didn't take any notes.

In closing, my first developer conference was a very interesting experience and I am glad I was able to attend! I was able to hear a variety of topics discussed, networked a bit, learned a few things, and most importantly - I got out of my comfort zone of introversion, at least for a little bit. I hope to be at next year's JS&Friends Conference and any others that come along near me.
