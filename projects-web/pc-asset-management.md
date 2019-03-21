---
title: "PC Asset Management (PAM)"
date: "2009-05-21T17:44:01-04:00"
cover: "/assets/images/project/pam_cover.png"
stack: "ASP.Net, C#, JavaScript, AJAX, T-SQL, SSIS"
excerpt: "A CRM/ERP web app that streamlined RETS' hardware lifecycle, providing accurate tracking of equipment & requests, increasing customer satisfaction."
---

I designed & coded LN Dayton Desktop Support's asset management software to replace an outdated system. This web application has streamlined their processes and provides more accurate tracking of equipment within the environment. It also provides standard and custom reporting regarding deployed equipment, inventory, request information and asset accounting.

This application was originally coded in classic ASP & VB Script; however, it was rewritten in C# within the .Net framework allowing for greater scalability, access control, and support for frequent enhancements & maintenance. Later I redesigned the layout for responsiveness and better mobile support.

In 2015, a "Global PC Request" form was introduced by the Service-Now team to facilitate equipment requests. In order to keep using our process, I wrote a RESTful C# web service to accept request records from Service-Now in json format to insert into our database. Additional functions query database to gather additional information not provided by originating form as well as sending an email notification after insertion.

---
