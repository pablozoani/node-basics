import { createServer, Server } from "http";
import e, { Express } from "express";

const app: Express = e();

app.use((req, res, next) => {
    console.log("In the first middleware!");
    next();
});

app.use((req, res, next) => {
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

app.use((req, res, next) => {
    console.log("Third middleware is not reached!");
});

const server: Server = createServer(app);
server.listen(3000, "localhost");
