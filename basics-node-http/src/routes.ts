import * as fs from "fs";
import http from "http";

export const requestHandler = (
    request: http.IncomingMessage,
    response: http.ServerResponse
) => {
    if (request.method === "GET") {
        switch (request.url) {
            case "/":
                response.setHeader("Content-Type", "text/html");
                response.statusCode = 200;
                response.write(
                    `
                    <html>
                        <header>
                            <meta charset="UTF-8"/>
                        </header>
                        <body>
                            <h1>Hello From The Server!</h1>
                            <form action="/message" method="POST">
                                <input type="text" name="myMessage"/>
                                <button type="submit">Send</button>
                            </form>
                        </body>
                    </html>
                    `
                );
                response.end();
                break;
            default:
                response.statusCode = 404;
                response.write("NOT FOUND");
                response.end();
        }
    } else if (request.method === "POST") {
        switch (request.url) {
            case "/message":
                const body: Uint8Array[] = [];
                /* register a function to read chunks on data signal */
                request.on("data", chunk => {
                    body.push(chunk);
                });
                /* register a function to execute on end signal */
                request.on("end", () => {
                    const parsedBody = Buffer.concat(body).toString();
                    const message = parsedBody.split("=")[1];
                    fs.writeFile("message.txt", message, error => {
                        if (!error) {
                            response.statusCode = 302;
                            response.setHeader("Location", "/");
                            response.end();
                        } else {
                            response.statusCode = 400;
                            response.setHeader("Location", "/");
                            response.end();
                        }
                    });
                });
                break;
            default:
                response.statusCode = 404;
                response.write("NOT FOUND");
                response.end();
        }
    }
};
