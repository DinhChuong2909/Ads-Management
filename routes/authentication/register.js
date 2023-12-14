import express from "express";
import bcrypt from "bcryptjs";
import { checkNotAuthenticated } from "../../utils/passport.js";
import authenticationService from "../../services/authentication.service.js";
import convertStringToDate from "../../utils/dateConverter.js";

const router = express.Router();

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

export default router;
