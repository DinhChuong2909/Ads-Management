import express from "express";
import passport from "passport";
import { checkNotAuthenticated } from "../../utils/passport.js";

const router = express.Router();

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

export default router;
