import http from "http";
import { requestHandler } from "./routes";

const server: http.Server = http.createServer(requestHandler);

server.listen(3000, "localhost");
