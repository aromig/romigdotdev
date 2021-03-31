---
title: "Automating Active Directory Tasks with PowerShell"
excerpt: "When a project looks like it's going to involve a lot of repetition, I always try to find a way to make it easier on myself - usually with the power of scripting."
date: "2020-01-10T13:36:00-04:00"
cover: "/assets/images/blog/automation_powershell.png"
---

## The Problem

For the last few months of 2019, I was working on an integration project where we were migrating an acquired company onto our infrastructure. Our team's role concentrated on either replacing outdated computers or applying a fresh operating system image onto the rest. One of the tasks in our configuration process is to create a computer account for the machine in [Active Directory](https://en.wikipedia.org/wiki/Active_Directory), while adding it to the correct policy groups and getting permissions set.

Doing this for one, two, or even a small group of machines is not really a big deal. I can motion through the series of clicks and typing without having to think about it. No problem. However when we have big orders like this, it can be exhausting to do this sort of preparation work. If there's anything I dislike, it's monotony & repetition. And I was looking at around 200 computer accounts that would need to be created for this project. 😓

What's a programmer to do? Automate it, of course!

## What I needed

I started by writing down what I needed this script to do &mdash; the essential functions to mimic our manual process.

1. Gather parameters such as target computer name, description, and OU container path.
2. Create the computer account in the given path.
3. Set a group account to be able to join the created computer to our network domain.
4. Add the created computer to certain policy groups.

## The Solution

Since the tasks that I needed automated were contained within Active Directory, I chose to write the script in PowerShell as it has a module available for it, as long as the Active Directory domain tools are installed which was no problem for any of us on the team.

### Getting the basics sorted out

The first part of the script is the [`New-ADComputer`](https://docs.microsoft.com/en-us/powershell/module/addsadministration/New-ADComputer?view=win10-ps) cmdlet, which creates a new Active Directory computer object.

```powershell
param ($computername, $description, $ou)
New-ADComputer -Name $computername -Path $ou -Description $description -Enabled $true
```

Then I needed to be able to add the computer account to certain policy groups. The [`Add-ADGroupMember`](https://docs.microsoft.com/en-us/powershell/module/addsadministration/Add-ADGroupMember?view=win10-ps) cmdlet can take care of this, along with the [`Get-ADComputer`](https://docs.microsoft.com/en-us/powershell/module/addsadministration/Get-ADComputer?view=win10-ps) cmdlet for supplying the `-Members` parameter.

```powershell
$computeraccount = Get-ADComputer $computername
Add-ADGroupMember -Identity $policy -Members $computeraccount
```

Setting a "join the domain" group to the computer account wasn't as straight forward as the policy groups. Changing the group for this works by granting a specific set of permissions onto the computer object. [This blog post](http://mgitservice.blogspot.com/2014/08/the-following-user-or-group-can-join.html) helped me understand what permissions needed to be set and how to implement this.

<details>
<summary>Function SetJoinDomainGroup()</summary>

```powershell
Function SetJoinDomainGroup {
    param ($computer, $group)

    $done = $false

    Write-Host "Waiting for Computer Account to be available" -NoNewline
    do {
        Start-Sleep -Milliseconds 500
        Write-Host "." -NoNewline

        try {
            $groupSID = (Get-ADGroup $group).sid
            $computerDN = (Get-ADComputer $computer -ErrorAction SilentlyContinue).distinguishedname
            $computerACL = Get-ACL "AD:$computerDN" -ErrorAction SilentlyContinue

            $rule1 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule($groupSID, 'DeleteTree, ExtendedRight, Delete, GenericRead', 'Allow', [GUID]'00000000-0000-0000-0000-000000000000')
            $rule2 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID,'WriteProperty', 'Allow', [GUID]'4c164200-20c0-11d0-a768-00aa006e0529')
            $rule3 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID, 'Self', 'Allow', [GUID]'f3a64788-5306-11d1-a9c5-0000f80367c1')
            $rule4 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID, 'Self', 'Allow', [GUID]'72e39547-7b18-11d1-adef-00c04fd8d5cd')
            $rule5 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID,'WriteProperty', 'Allow', [GUID]'3e0abfd0-126a-11d0-a060-00aa006c33ed')
            $rule6 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID,'WriteProperty', 'Allow', [GUID]'bf967953-0de6-11d0-a285-00aa003049e2')
            $rule7 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID,'Extendedright', 'Allow', [GUID]'5f202010-79a5-11d0-9020-00c04fc2d4cf')
            $rule8 = New-Object System.DirectoryServices.ActiveDirectoryAccessRule ($groupSID,'WriteProperty', 'Allow', [GUID]'bf967953-0de6-11d0-a285-00aa003049e2')

            $computerACL.AddAccessRule($rule1)
            $computerACL.AddAccessRule($rule2)
            $computerACL.AddAccessRule($rule3)
            $computerACL.AddAccessRule($rule4)
            $computerACL.AddAccessRule($rule5)
            $computerACL.AddAccessRule($rule6)
            $computerACL.AddAccessRule($rule7)
            $computerACL.AddAccessRule($rule8)

            $computerACL | Set-ACL "AD:$computerDN"

            $done = $true

            Write-Host ""
            Write-Host "   + Permissions set for $group" -ForegroundColor Green
        } catch {
            Write-Host " ! There was a problem setting permissions for $group"
            Write-Host $_
        }
    } until ($done)
}
```

</details>

I could then call this function as:

```powershell
SetJoinDomainGroup -Computer $computername -Group $defaultJoinGroup
```

So far so good &mdash; I had a basic script written! 😄 Next I implemented logic for error checking as well as taking in a CSV (comma separated value) file, looping through the list to create the accounts in batch.

### Making it user-friendly

It wasn't going to be just me using this script. While I don't mind editing a text file and then running things from the command line, I was sure others would find it inconvenient. I wanted to make a GUI version but what could it look like? I attempted to draw something I could reference when I was coding it up. It's nice to have a visual.

![Really bad sketch of a UI](/assets/images/blog/ad_powershell_gui_drawing.jpg)
_Yeah...You get the idea, right?_

Then I looked up how to get started coding a GUI for PowerShell scripts. [This post at LazyAdmin](https://lazyadmin.nl/powershell/powershell-gui-howto-get-started/) helped a lot in understanding how it goes together, while [POSHGUI](https://poshgui.com/) allowed me to quickly wireframe a design and provide me with code (like shown below) I could work off of and tweak.

```powershell
Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.Application]::EnableVisualStyles()

$MainForm                        = New-Object system.Windows.Forms.Form
$MainForm.ClientSize             = '391,393'
$MainForm.text                   = "AD Computer Create"
$MainForm.TopMost                = $false
$MainForm.FormBorderStyle        = "Fixed3D"
$MainForm.MaximizeBox            = $false
$MainForm.ShowIcon               = $false
```

After an afternoon of playing around, I came up with this:

<div style="display: grid; grid-template-columns: 1fr 1fr">
  <a href="/assets/images/blog/RECreate_single.jpg" target="_blank"><img src="/assets/images/blog/RECreate_single.jpg" alt="RECreate - Single Computer View"></a>
  <a href="/assets/images/blog/RECreate_multiple.jpg" target="_blank"><img src="/assets/images/blog/RECreate_multiple.jpg" alt="RECreate - Multiple Computers View"></a>
</div>

Changes to the _location_ field and _machine type_ radio buttons will automatically update the _OU_ field with the proper path. A progress bar at the bottom of the interface fills up proportionately depending on how many accounts are being created and what step it's on. Feedback such as statuses and errors still log to the console window that opens when the app starts.

### Making it customizable

I was planning on having this utility available for our team to use and possibly our IT teams in field offices. One configuration wouldn't work so well, especially if it's hard-coded into the app. So I added in functionality to read an XML-formatted config file so different users can have their own default settings.

<small>Note: The formatting applies specifically to our internal usage and naming conventions. Most values have been redacted.</small>

<details>
<summary>config.xml</summary>

```xml
<?xml version="1.0"?>
<ADComputerCreate>
  <!--
      Computer Naming Convention: <MachinePrefix><LocationCode><MachineType>-<ID>
      Example: CMPDAYL-7001234
  -->
  <MachinePrefix>CMP</MachinePrefix>
  <LocationCode>DAY</LocationCode>
  <!--
      OU defined as:
      OU=<LocationCode>,OU=<Region>,<Laptops|Desktops>,OU=<Container>,<Realm>

      Example: OU=DAY,OU=Americas,OU=Laptops,OU=Workstations,DC=domain,DC=forest,DC=tld
  -->
  <AD>
    <Realm>DC=domain,DC=forest,DC=tld</Realm>
    <Region>Americas</Region>
    <Container>Workstations</Container>
    <JoinDomainGroup>Client Installers</JoinDomainGroup>
  </AD>
  <!--
      Newly created computer accounts can be added to defined group policies
  -->
  <Laptops>
    <Policies>
      <Policy>Certificate Enabled Workstations</Policy>
      <Policy>MBAM BitLocker Encrypt</Policy>
    </Policies>
    <Attributes>
    </Attributes>
  </Laptops>
  <Desktops>
    <Policies>
    </Policies>
    <Attributes>
    </Attributes>
  </Desktops>
  <Macs>
    <Policies>
      <Policy>Certificate Enabled Workstations</Policy>
    </Policies>
    <Attributes>
      <!-- Value will be pulled from OU realm -->
      <!-- Example: cmpdayl-7001234.domain.forest.tld -->
      <Attribute>dnsHostName</Attribute>
    </Attributes>
  </Macs>
</ADComputerCreate>
```

</details>

## The Results

As mentioned before, we were looking at needing around 200 computer accounts created. On average this task per account could take from 30 seconds to a minute depending on how fast you are with a mouse and keyboard as well as keeping an eye on which asset tag & user name you were currently on.

Instead I was able to export a spreadsheet to a CSV file and open that file directly into the app. So just for this project, we saved somewhere in the ballpark of 1.5 to 3 hours of labor &mdash; not to mention time saved from correcting any mistakes that could happen during manual entry. Having this app available helped make this project run a bit more smoothly and it will definitely be used in our everyday work.

Though the production code for this script is not available, I have published a public version (with redacted/generic values) onto a [GitHub repository](https://github.com/aromig/ad-computer-create). I will possibly edit it in the future to allow for a more generic naming convention when creating in batch (or use literal values from the imported CSV).
