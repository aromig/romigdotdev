---
title: "ASP.Net: Finding a Control within a UserControl"
excerpt: ".Net Controls can be a hierarchical mess sometimes, especially when you have MasterPages involved."
date: "2018-07-13T11:36:00-04:00"
cover: "/assets/images/blog/generic_code_cover.jpg"
---

A web application I maintain is built on ASP.Net WebForms. And when I created it years ago, I gave some thought on modularity but possibly I didn't think deep enough. I wasn't even sure if that was possible. I use MasterPages, of course, since they make consistency easier across the site but there had to be more I could do to keep myself from having repeated code. I guess I didn't search very thoroughly

## Quick Intro to UserControls

A UserControl is a portion of a page that can be reused in different places. It can be best thought of as a component that you can plug into other pages. It contains markup & controls even its own code-behind file - just like a regular page.

```html
<%@ Control Language="C#" AutoEventWireup="true"
CodeFile="UserInfoBoxControl.ascx.cs" Inherits="UserInfoBoxControl" %>

<h1>Example UserControl</h1>
<asp:Label ID="lblName" runat="server" />
<br />
<asp:Label ID="lblLocation" runat="server" />
```

And its code-behind:

```cpp
using System;

public partial class UserInfoBoxControl : System.Web.UI.UserControl {
  public string Name
  {
    get { return lblName.Text; }
    set { lblName.Text = value; }
  }

  public string Location
  {
    get { return lblLocation.Text; }
    set { lblLocation.Text = value; }
  }

  protected void Page_Load(object sender, EventArgs e)
  {
  }
}
```

The above is a very basic control that can be built. A more useful one would grab dynamic data from a source such as a SQL database, for example, and display it within the control.

To use the user control, it would need to be registered either on each page or within the web.config file under the `<pages>` section.

```xml
<pages>
  <controls>
    <add tagPrefix="uc" tagName="UserInfo" src="~/controls/UserInfoBoxControl.ascx" />
  </controls>
</pages>
```

Then it can be placed inside a page just like another ASP.Net control.

```html
<uc:UserInfo ID="user" runat="server" Name="Bob" Location="Ohio" />
```

So you can see with the custom attributes that this can be a powerful method of designing your own controls.

## My Problem

The UserControl I built for my app contains computer equipment request information (user data, location, model of laptop needed, dates, business unit, etc) and I wanted it to be a central point where I could update its layout in one place while displaying it on multiple related pages. Just displaying that information was easy once I had the foundations of designing the control down.

An issue came up, though, when I needed to access information that was in the original controls, which were now in the User Control. How in the world was I supposed to reference it? After all, I couldn't access the child controls of the UserControl directly.

## My Solution

My solution to this problem involved a deep search method involving a couple of functions. These are defined in a separate class, of course.

For this example, in App_Code\Globals.cs

```cpp
public static Control GetUCControl(string UserCtl, string Ctl)
{
  Page page = (Page)HttpContext.Current.CurrentHandler;
  MasterPage master = page.Master;
  // Insert the ID of your CPH defined in your MasterPage
  ContentPlaceHolder cph = (ContentPlaceHolder)master.FindControl("ContentplaceholderID");
  // Use a recursive function to dig through the control hierarchy (defined below)
  UserControl user_ctrl = (UserControl)FindControlRecursive(cph, UserCtrl);
  Control ctrl = user_ctrl.FindControl(Ctl);

  return ctrl;
}

private static Control FindControlRecursive(Control root, string id)
{
  if (root.ID == id)
    return root;

  foreach (Control control in root.Controls)
  {
    // Checks to see if the child of the control is the one we're looking for, checking its children as we go
    Control child = FindControlRecursive(control, id);
    if (child != null)
      return child;
  }

  return null;
}
```

So with those functions in the Globals class, I can now call the first one to recursively find the control I want, making sure to cast it as the proper original control type.

```cpp
Label label_name = Globals.GetUCControl("UserInfo", "lblName") as Label;

// And now we can access all of the control's properties

string name = label_name.Text;
label_name.Text = "Totally rad, right? 🔥";
label_name.ForeColor = Color.Red;
```

## Addendum

It seems that I didn't search enough and did this the hard way. Upon further research, it seems you can just create accessors for each inner control via getters and setters.

In the UserControl's code-behind:

```cpp
public partial class UserInfoBoxControl : System.Web.UI.UserControl {
  public string NameText
  {
    get { return lblName.Text; }
    set { lblName.Text = value; }
  }
}
```

Within the page's code-behind:

```cpp
  string name = UserInfo.NameText;
  UserInfo.NameText = "Kind of bodacious! 💥";
```

No complicated recursion needed. Wow, did I take the long way around or what? Of course my method does give me access to all of the control's properties. Doing it this way I would need to define accessors for each property. Which is... actually a good practice in abstraction. 🤷🏻‍♂️

Even though my first solution was inventive, yes, use the accessor way above. It follows good OOP principles.

Edit: I quickly tried the above and it wasn't working for me. It couldn't tell that there was an exposed property under the UserControl. I might be missing something (like IntelliSense not updating?) here but it looks straight-forward and _should_ work.
