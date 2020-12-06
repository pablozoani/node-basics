# Express.js

## What is?

A Framework. Helper functions and tools combined with a set of rules.

## Why?

-   Server logic is complex.
-   Focus on your business logic only.

## Alternatives to Express.js

-   Vanilla Node.js
-   Adonis.js
-   Koa
-   Sails.js

## Install

1. `npm install --save express`
2. `npm install --save-dev @types/express`

## Usage

### Initial setup

1. Import express from the module
2. Call the function to create an Express object.
3. Pass the express object to http.createServer() as an argument.

### How it works

1. You call Express.use() before passing it to createServer().
2. Let f be a function of type `(request, response, next) => void`.
3. Let Express.use() receive f as a parameter.
4. If you want the request to continue to the next middleware, call next().
5. Call response methods inside f to configure the response.
6. Call Express.listen() to wait for connections.
