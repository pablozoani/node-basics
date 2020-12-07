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

## Basic usage

### Initial setup

1. Import express from the module
2. Call the function to create an Express object.
3. Pass the express object to http.createServer() as an argument.

### How it works

1. You call Express.use() before passing it to createServer().
2. Let f be a function of type `(request, response, next) => void`.
3. Let Express.use() receive a path of type string and f as a parameter.
4. If you want the request to continue to the next middleware, call next().
5. Call response methods inside f to configure the response.
6. Call Express.listen() to wait for connections.

```ts
import e, { Express } from "express";

const app: Express = e();

// requests are filtered with the path.
app.use("/", (req, res, next) => {
    console.log("In the first middleware!");
    next();
});

app.use("/", (req, res, next) => {
    console.log("In the second middleware!");
    res.send(
        `
            <html>
                <header>
                    <meta charset="UTF-8"/>
                    <title>Title!</title>
                </header>
                <body>Some Html Page</body>
            </html>
        `
    );
});

app.use("/", (req, res, next) => {
    console.log("Third middleware is not reached!");
});

app.listen(3000, "localhost");
```

## Run project

```
npm start
```
