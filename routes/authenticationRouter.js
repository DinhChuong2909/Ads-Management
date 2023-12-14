import express from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from "../utils/passport.js";
import initializePassport from "../utils/passport.js";
import authenticationService from "../services/authentication.service.js";
import convertStringToDate from "../utils/dateConverter.js";

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

router.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("authentication/signIn");
});

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/phuong",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("authentication/register");
});

router.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      hashed_password: hashedPassword,
      date_of_birth: convertStringToDate(req.body.dob),
      phone: req.body.phone,
      role: req.body.role,
    };
    await authenticationService.add(user);

    res.redirect("/login");
  } catch (error) {
    console.log("Post failed", error);
    res.redirect("/register");
  }
});

router.get("/updatePassword", checkAuthenticated, (req, res) => {
  res.render("authentication/updatePassword");
});

router.post("/updatePassword", checkAuthenticated, async (req, res) => {
  try {
    const hashedNewPassword = await bcrypt.hash(req.body.password, 10);
    const user = await authenticationService.findByEmail(req.body.email);

    await authenticationService.updatePassword(user.id, hashedNewPassword);

    req.logout((err) => {
      if (err) {
        return res.status(500).send("Error logging out");
      }
      res.redirect("/login");
    });
  } catch (error) {
    console.log("Post failed", error);
    res.redirect("/updatePassword");
  }
});

router.delete("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.redirect("/login");
  });
});

export default router;
