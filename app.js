// LIBRARY
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import expbs from "express-handlebars";
import path from "path";

// PAGES
import governmentRouter from "./routes/governmentRouter.js";
import aboutRouter from "./routes/aboutRouter.js";
import phuongRouter from "./routes/phuongRouter.js"
// import publicRouter from "./routes/people/homeRouter.js"

// DIRNAME
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// HANDLEBARS
const hbs = expbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"), // change layout folder name
  partialsDir: path.join(__dirname, "views/pieces"), // change partials folder name
});

// SETTING ENGINE
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/static", express.static("static"));
// app.get("/", publicRouter);
app.get("/government", governmentRouter);
app.get("/about", aboutRouter);
app.get("/phuong", phuongRouter);
app.get("/phuong/diadiem", phuongRouter);


// START 
function serverStartedHandler() {
  console.log("Web server is running at http://localhost:3000");
}

app.listen(3000, serverStartedHandler);
