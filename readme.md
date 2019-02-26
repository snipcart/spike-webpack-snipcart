# Webpack-Powered Static Site Generator Spike Tutorial

![spike](https://snipcart.com/media/204098/spike.png)

This repo contains the code for a demo Spike e-commerce website. Spike is powered by webpack.

If you're unfamiliar with this module bundler, don't worry, we explore all the basics in this webpack static site tutorial.

We'll be using Spike to craft a webpack-powered online shop in five simple steps:

- Declaring products
- Tweaking our app.js
- Creating views in Spike
- Booting the webpack static site
- Deploying on Netlify

> [Read full tutorial](https://snipcart.com/blog/webpack-static-site-tutorial-spike)

> [See live demo](http://spike-snipcart.netlify.com/)

Enjoy folks!

## Setup

- make sure [node.js](http://nodejs.org) is at version >= `6`
- `npm i spike -g`
- clone this repo down and `cd` into the folder
- run `npm install`
- run `spike watch` or `spike compile`

## Testing
Tests are located in `test/**` and are powered by [ava](https://github.com/sindresorhus/ava)
- `npm install` to ensure devDeps are installed
- `npm test` to run test suite
