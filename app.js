// LIBRARY
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import expbs from "express-handlebars";
import passport from "passport";
import path from "path";
import bodyParser from "body-parser";
import flash from "connect-flash";

// PAGES
import governmentRouter from "./routes/governmentRouter.js";
import aboutRouter from "./routes/aboutRouter.js";
import phuongRouter from "./routes/phuongRouter.js"
import publicRouter from "./routes/people/homeRouter.js"

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

// SETTING PASSPORT)
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// SETTING ENGINE
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

// AUTHORIZATION
// router.get("/", function (req, res, next) {
//   if (req.isAuthenticated() && "ADMIN" == req.session.passport.user.name_role) {
//     console.log(req.session.passport.user);
//     res.render("shop/addProduct");
//   } else {
//     res.send("ban da khong co quyen");
//   }
// });

// canBoApp.use(
//   session({
//     secret: "",
//     resave: false, //don't save session if unmodified
//     saveUninitialized: true, // don't create session until something stored
//     store: MongoStore.create({
//       mongoUrl: mongoURI,
//     }),
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
//   }),
//   cookieParser(""),
//   flash()
// );

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
