import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import expbs from "express-handlebars";
import path from "path";

import governmentRouter from "./routes/governmentRouter.js";
import aboutRouter from "./routes/aboutRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const hbs = expbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"), // change layout folder name
  partialsDir: path.join(__dirname, "views/pieces"), // change partials folder name
});


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/static", express.static("static"));
app.get("/", governmentRouter);
app.get("/about", aboutRouter);

function serverStartedHandler() {
  console.log("Web server is running at http://localhost:3000");
}

app.listen(3000, serverStartedHandler);
