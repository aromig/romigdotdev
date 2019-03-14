---
title: "Cold Callers Guild site launched"
excerpt: "A much needed overhaul of a fan site was a fun excercise in planning, database architecture, API research, and user experience."
date: "2015-06-29T17:44:01-04:00"
---

![Cold Callers Guild - Front Page](/assets/images/blog/ccg_launched.png)

This past weekend I launched the new official web site for the Cold Callers Guild, a gaming group hosted by MMOCentralForums that plays the online game “ToonTown Rewritten.” The admin staff asked me to develop this new site as the old one was very outdated and prone to malicious users entering false and/or obscene data into their reports and user information. The new site is a total overhaul of the design, database structure, and server-side code as well as being integrated with their forum’s vBulletin software in regards to user identity.

---

## Features

### Easy Registration & Login

The CCG wanted the user registration to be simple yet secure. In an earlier draft of the site, I had created a process which involved a registration form, verification via email (which may or not be tagged as spam), logging in, remembering the user via cookies & session variables, etc. All this was scrapped when I looked into vBulletin’s API and found I could simplify this process using the currently logged in user (on the forum). This allows the forum to maintain responsibility over user identity, security, and group membership and the web site to not add another unneeded layer to the process. All users need to do in order to use the site is be logged into the forum and be a member of the guild’s user group.

### User Profiles

Users can add, edit, and delete their “toon” information for other members to see. This helps other members recognize them at events and lets them track their progress offline from the game.

### Member List

The site provides users with a tabular list of toons with their stats that is searchable, sortable, and pageable. It also features a list of “ambassadors” that they can directly private message (on the forum) with questions.

### Run & Event Schedules

The CCG regularly hosts events for playing the game as a group to help others complete certain end-game battles. The schedules are dynamically created for supported time zones.

### Guidelines & Strategies

Of course, the site provides rules & guidelines for the group’s operations as well as some strategy guides for the battles.

### Run Reporting

Users can submit battle reports using a dynamic form that auto-populates controls based on other user input (battle type, number of toons present, levels, etc). In addition to adding their report to the database, the user can copy a forum compatible version of the text to post on the appropriate “Run Report” thread on the forum.

### Victories

Users may view the aforementioned run reports based on specific dates or months. They may also edit their own reports in case of errors.

### AdminCP

The administrators are provided a separate control panel to manage various aspects of the site and users.

### Responsive Design

What new web site nowadays would be complete without support for mobile devices such as smartphones and tablets? The site is fully responsive to device & window size.

---

## Built With

- Front-end : HTML5, CSS3, JavaScript, jQuery, jQueryUI, DataTables
- Back-end : PHP, mySQL, AJAX, JSON
- Frameworks : Medoo, Bootstrap
- API : vBulletin

---

## Thoughts

Overall, I am very proud of the work I did on this site. I haven’t had this much fun creating a web site in a long time. I spent many evenings coding and sometimes losing track of time because I was so in the zone. I know it’s not the most eye-popping and professional looking site out there, but this design and feel is exactly what my client wanted. The excitement of the users’ comments and feedback is what makes me the most happy about it.

Web Site URL: [mmocentralforums.com/ccg](http://mmocentralforums.com/ccg)

Client: [MMOCentralForums](http://mmocentralforums.com)
