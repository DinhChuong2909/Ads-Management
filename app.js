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
import bcrypt from "bcryptjs";

// UTILS
import initializePassport from "./utils/passport.js";
import { checkAuthenticated, checkNotAuthenticated } from "./utils/passport.js";

// PAGES
import governmentRouter from "./routes/governmentRouter.js";
import aboutRouter from "./routes/aboutRouter.js";
import phuongRouter from "./routes/phuongRouter.js";
// import publicRouter from "./routes/people/homeRouter.js"

// DIRNAME
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// USER DB (TEMP)
const users = [];

// INIT PASSPORT
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

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
app.get("/", checkAuthenticated, (req, res) => {
  res.render("phuong", { name: req.user.name });
});
app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("authentication/signIn");
});
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/phuong",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("authentication/register");
});
app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    console.log("req body:", req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      dateOfBirth: req.body.dob,
      phone: phone,
      role: role,
    });
    res.redirect("/login");
  } catch (error) {
    console.log("post failed", error);
    res.redirect("/register");
  }
  console.log("Users: ", users);
});

app.delete("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.redirect("/login");
  });
});

// PAGE ROUTERS

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
