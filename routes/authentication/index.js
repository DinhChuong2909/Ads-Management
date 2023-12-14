import express from "express";
import passport from "passport";
import { checkAuthenticated } from "../../utils/passport.js";
import initializePassport from "../../utils/passport.js";
import authenticationService from "../../services/authentication.service.js";

const router = express.Router();

// INIT PASSPORT
router.get("/", (req, res, next) => {
  initializePassport(
    passport,
    (email) => authenticationService.findByEmail(email),
    (id) => authenticationService.findById(id)
  );
  next();
});

router.get("/", checkAuthenticated, (req, res) => {
  if (red.body.role === "cbsovhtt") {
  } else if (req.body.role === "cbquan") {
    res.render("quan");
  } else if (req.body.role === "cbphuong") {
    res.render("phuong");
  } else {
    res.redirect("/register");
  }
});

export default router;
