import * as dotenv from "dotenv";
import http from "http";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
