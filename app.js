import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.sendFile(_dirname + "/test.html");
});

function serverStartedHandler() {
  console.log("Web server is running at http://localhost:3000");
}

app.listen(3000, serverStartedHandler);
