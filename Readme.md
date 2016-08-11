# Beacon Demo

A demo of the [Physical Web](https://google.github.io/physical-web) using an Eddystone beacon to serve bus schedules.

Method/Inspiration: https://medium.com/@urish/exploring-the-physical-web-without-buying-beacons-efae51e36c2e#.tt47mvxlv

## Server Setup

1. Clone this repo and cd into folder.
2. Install node dependancies with `npm install`.
3. Start server with `npm start`.

## Client Setup

Once bluetooth server is broadcasting, it can be viewed in Chrome on iOS and Android.

### iOS

1. Unlock device and open the _Today_ screen by swiping down from the top.
2. Add Chrome to the screen using the _Edit_ button at the bottom of the list and enable Physical Web links.
3. The _Today_ panel should scan for links.

### Android

_Needs Testing..._

1. Chrome should send a notification to enable the physical web automatically.
2. If not, follow instructions [here](https://google.github.io/physical-web/try-physical-web#android).
