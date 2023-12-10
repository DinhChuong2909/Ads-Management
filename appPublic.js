// LIBRARY
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import expbs from "express-handlebars";
import path from "path";

// PAGES
import homeRouter from "./routes/people/homeRouter.js"
import reportRouter from "./routes/people/reportRouter.js"
import aboutRouter from "./routes/aboutRouter.js"

// DIRNAME
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// HANDLEBARS
const hbs = expbs.create({
  defaultLayout: "mainPublic",
  layoutsDir: path.join(__dirname, "views/layouts"), // change layout folder name
  partialsDir: path.join(__dirname, "views/people"), // change partials folder name
});

// SETTING ENGINE
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("static"));
app.use("/report", reportRouter);
app.get("/report", reportRouter);
app.post("/report", reportRouter);
// app.use("/", allDataRouter);
app.post("/", homeRouter);
app.get("/", homeRouter);
app.get("/about", aboutRouter);

// START 
function serverStartedHandler() {
  console.log("Web server is running at http://localhost:9000");
}

app.listen(9000, serverStartedHandler);
