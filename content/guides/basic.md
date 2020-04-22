---
title: Basic usage guide
description: Learn how to use the basic functionalities of the app NextBusSG
excerpt: Learn how to use the basic functionalities of the app NextBusSG
---

This article aims to teach you the basics of NextBusSG (viewing bus arrival timings and adding bus services to your favorites). If you haven't downloaded the app, click <nuxt-link to="/#download">here</nuxt-link> to do so.

## 1. Viewing bus timings

When you open the app, you will see a list of bus stops nearby. Clicking on any of them will reveal a list of bus services:

<ImgComp src="basic/stopsservices.png" />

As you can see, the bus stop **Bedok Stn Exit A** has the bus servies **2**, **9**, **24**, **25**, etc. operating. If, for example, you want to see when **bus 24** is arriving, look for **24** in the list of bus services:

<ImgComp src="basic/service-tile.png" />

The number in black is the bus number (24), and the other three numbers are the bus arrival times. From the image we see the following bus arrival times:

- Arr (the bus has arrived)
- 12 minutes
- 22 minutes

That's all you need! You may also see the level of crowded of the bus depending on the color of the timings:

- <Clr color="green">Green</Clr> means no crowd
- <Clr color="orange">Yellow</Clr> means little crowd
- <Clr color="red">Red</Clr> means overcrowded

So all three bus 24s have a regular load.

## 2. Add favorites

You can add a particular bus service at a bus stop to your favorites. Let's say you take **bus 14** at **Bedok Int** often, and you want to add it to your favorites:

First, tap on the on the number **14**, and you should see a confirmation prompt:

<ImgComp src="basic/favorites-prompt.png" />

Click on the <Clr color="accent">**Yes**</Clr> button to add it. It is possible to add multiple favorites from each bus stop. If, for example, you've added buses 9 and 14 from Bedok Int, you will see this in your favorites:

<ImgComp src="basic/favorites.png" />

Add buses you take often to your favorites.


### Context-aware favorites

When you open the app the next time, if you have any favorites that are **near** you, they will be shown at the top of the screen. This decision is made by the app. 

If none of your favorites are near by, the app will show you a list of all near by bus stops.