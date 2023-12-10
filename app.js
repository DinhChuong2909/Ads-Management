// LIBRARY
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import expbs from "express-handlebars";
import passport from "passport";
import path from "path";
import flash from "connect-flash";
import methodOverride from "method-override";
import session from "express-session";

// PAGES
import governmentRouter from "./routes/governmentRouter.js";
import aboutRouter from "./routes/aboutRouter.js";
import phuongRouter from "./routes/phuongRouter.js";
// import publicRouter from "./routes/people/homeRouter.js"
import authenticationRouter from "./routes/authenticationRouter.js";

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
app.use(express.urlencoded({ extended: true }));

app.use(flash());
app.use(
  session({
    secret: "SangChuongHuyKTPM2AdsMng",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// CHECK AUTHENTICATED
app.get("/", authenticationRouter);
app.get("/login", authenticationRouter);
app.post("/login", authenticationRouter);
app.get("/register", authenticationRouter);
app.post("/register", authenticationRouter);
app.delete("/logout", authenticationRouter);

// PAGE ROUTERS
app.use("/static", express.static("static"));
// app.get("/", publicRouter);
app.use("/phuong", phuongRouter);
app.get("/phuong/diadiem/edit", phuongRouter);

app.get("/government", governmentRouter);
app.get("/about", aboutRouter);
app.get("/phuong", phuongRouter);
app.get("/phuong/diadiem", phuongRouter);
app.post("/phuong/diadiem/edit/add", phuongRouter);

// START
function serverStartedHandler() {
  console.log("Web server is running at http://localhost:3000");
}

app.listen(3000, serverStartedHandler);
