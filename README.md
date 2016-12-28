# Start an es6 project

## Purpose

This project aims to give a concrete approach on how to start a project using EcmaScript6.

I'm willing to go straight to the point, making es6 work.
Other conventions and structures may be just more overhead against the aim of the project.

## How to use

1. clone
2. `npm install -g browser-sync && npm install`
3. `npm run gulp` or `npm run webpack`
4. Start hacking !

## Inside

* es6 Browser support testing
* es6 setup env with : babel + gulp + browserify
* es6 setup env with : babel + webpack


## Reminders

Babel is a es6 to es5 transpiler.

Turns
```
const square = (a = 0) => a * a;
```
Into
```
"use strict";

var square = function square() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return a * a;
};
```
___

Gulp is a task runner, stream oriented

___

> Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
>
> Official website

___

Webpack is a module bundler much like Browserify but thought with common gulp tasks.