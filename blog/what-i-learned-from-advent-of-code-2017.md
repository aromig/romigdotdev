---
title: "What I learned from Advent of Code 2017"
excerpt: "Joining in a month-long coding challenge grew me as a programmer and gave me more renewed passion for my craft."
date: "2018-01-19T17:01:25-05:00"
cover: "/assets/images/blog/adventofcode2017.jpg"
---

![Advent of Code 2017 finished!](/assets/images/blog/adventofcode2017.jpg)

Last month I participated in [Advent of Code](http://adventofcode.com/) for the first time. For those who aren’t familiar, Advent of Code is a series of 25 daily programming challenges beginning on December 1st. I was introduced to it by a member of the [Dayton Web Developers](https://www.meetup.com/dayton-web-developers/) group in early November. Being mostly self-taught and since coding is a tertiary duty in my job, I decided that I could use the extra practice with somewhat real problems to solve. Plus this would expand my [GitHub profile](http://github.com/aromig/) quite a bit for future employers to look at.

There are no restrictions on which language(s) to utilize but I decided to stick with JavaScript, plain JavaScript at that. I’m very comfortable with it and I was certain there were going to be puzzles that would force me to go outside my comfort zone and learn a few things along the way. And boy did I!

---

## I Learned How to Code Better

They’re right. Practice does make perfect, or at least much closer to perfect than before. I feel that I have honed my skills in at least three areas: coding techniques & methods, logic & problem solving, and debugging.

### More appreciation for regular expressions.

Pattern matching via regular expressions was invaluable when I needed to parse the puzzle inputs. Since I took these as given (except day 25 I’ll admit) and plugged them into my code in a single string variable, I had to get really creative in organizing it all into arrays and objects.

### Array methods.

I learned to utilize just about all of the built-in methods used to traverse arrays (.forEach, .map, .reduce, .sort, etc). I’ve used them before, sure, but now I use them all of the time. Sometimes I chained three or four together in one go. It’s quite magical.

### Refactoring my callbacks.

Along with the array methods, my callbacks for them started out with `function(x) { … }` but by the end of a week, I was writing `x => { … }`. Not a significant change but getting into that habit allowed me to quickly write the one-liner types of callbacks for returning values (such as converting puzzle input text into integers i.e. `.map(x => parseInt(x));)`.

### Recursion was my friend.

Figuring out the logic and then writing recursive functions can be mind-bending at times but utilizing them properly will save me a lot of time in the future.

### Break it down.

There were a few puzzles where I needed to break up the problem into smaller bites, creating separate functions to handle those tasks. It helped me visualize the flow of logic and let me re-use similar modules for the second part of the challenge.

---

## I Learned Things I Knew I Didn’t Know

I’m not a senior developer nor a computer scientist so of course there was bound to be topics these puzzles make reference to that I didn’t have a clue on. Luckily the puzzle flavor text gracefully explains the concepts (coupled with wiki links in case we’re totally confused) in a way that fits the story well. However, sometimes I got stuck anyway. There were definitely moments of “OMG I’m not a computer science major! How do I even..!?”

I would be on a high from figuring out a challenge all by myself and when the next one goes live at midnight, my heart sinks. I would then be utterly confused (and re-evaluating my career choices). For those I let myself sleep on it to get a fresh perspective in the morning. Usually that helped a lot. Rest is definitely important.

Yet there were a few that I had to set aside my pride and check the AoC sub-reddit page. Scanning through the replies of hints of solutions, I would eventually find a semblance of something I could understand and dissect. Note that I did not copy & paste code when I was stuck. You cannot learn anything that way. In most of these instances, I had to translate the concept into JavaScript anyway. Even others’ JavaScript code were within the context of a framework or library. The important part is that I tried to understand why it worked before writing my own code.

---

## Conclusion

I am glad I had the opportunity and time to take part of this almost month-long coding challenge. I have grown as a programmer and have definitely learned my fair share of ways of thinking about problems and how to solve them. Thanks to my new peers at DWD for introducing me to Advent of Code and thanks to my family for not judging my sanity when I banged my head into my desk for no apparent reason.

I’m going to participate again this coming December and in the meantime find other coding challenges to keep practiced. I’ve already started doing the 2016 version of AoC.

If you want to see my code for AoC 2017, take a look at my repository on GitHub. There’s definitely room for improvement, but for this event it all works fairly quickly.

[Github Repository](https://github.com/aromig/advent2017)
