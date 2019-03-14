---
title: "macOS Quirks: Bluetooth Device Battery Low"
excerpt: "For some reason, macOS has a very low threshold set for bluetooth batteries. After looking for a setting to change this, I coded up a workaround instead."
date: "2018-10-03T13:51:55-04:00"
---

For some reason, macOS has a _very_ low threshold set for bluetooth batteries (such as the Magic Mouse & Keyboard). Believe it or not, it's set to 2%. To me, that's a bit too close to death to let me know its battery is getting low and I needed more warning than that - especially given that the Apple Magic Mouse 2's Lightning port is on the bottom of the mouse. Charging it is not something I can do while I'm trying to work.

I searched around and could not find a setting or even a plist entry to change that. Luckily a lot of things within macOS is accessible through command line tools. The main tool we can use to access this information is [`ioreg`](http://www.manpagez.com/man/8/ioreg/) ([the I/O Registry](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/IOKitFundamentals/TheRegistry/TheRegistry.html)).

I wrote a couple of bash scripts to work-around this issue, one for the mouse and another for the keyboard.

```bash
#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin

# Script that checks the battery level of a connected mouse and displays a notification if it is below a threshold (default 15%). Can set threshold as a parameter. ex: ./check_mouse_battery.sh 10

MOUSENAME=`ioreg -c AppleDeviceManagementHIDEventService -r -l | grep -i mouse | cut -d = -f2 | cut -d \" -f2`

MOUSEBATTERY=`ioreg -c AppleDeviceManagementHIDEventService -r -l | grep -i mouse -A 20  | grep BatteryPercent | cut -d = -f2 | cut -d ' ' -f2`

COMPARE=${1:-15}

if [ -z "$MOUSEBATTERY" ]; then
    echo 'No Mouse Found.'
    exit 0
fi

if (( MOUSEBATTERY < COMPARE )); then
    osascript -e "display notification \"Battery Level at ${MOUSEBATTERY}%.\" with title \"Battery Low\" subtitle \"${MOUSENAME}\""
fi
```

The script(s) essentially:

1. Grabs the name of the device `MOUSENAME` & its battery percentage `MOUSEBATTERY`.
2. Sets the value of `COMPARE` to the first script argument or the default (15).
3. If no device is found, it exits the script.
4. If `MOUSEBATTERY` is less than `COMPARE`, displays a Notification in macOS with the current battery level.

![Low Battery Notification](https://raw.githubusercontent.com/aromig/scripts/master/check_battery/check_mouse_battery_notification.png)

Then I had to set up a way to automate running the script at regular intervals. For this I am using [`launchctl`](http://www.manpagez.com/man/1/launchctl/) and instructions for setting that up is included in the repository for this utility below. I have the plist for it configured to run the script every 2 hours.

To keep the script simple, I separated checking the mouse & keyboard into different files. Getting around that annoyance was a fun exercise in itself and I may actually look forward to the next time I get the warning to charge my devices soon.

[Github Repository](https://github.com/aromig/scripts/tree/master/check_battery)
