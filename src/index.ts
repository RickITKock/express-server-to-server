import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
