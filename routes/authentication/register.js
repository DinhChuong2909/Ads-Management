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
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);

    const user = {
      ID: Date.now().toString().slice(-4),
      Name: req.body.Name,
      Email: req.body.Email,
      Hashed_password: hashedPassword,
      Date_of_birth: convertStringToDate(req.body.DOB),
      Phone: req.body.Phone,
      Role: req.body.Role,
    };
    await authenticationService.add(user);

    res.redirect("/login");
  } catch (error) {
    console.log("Post failed", error);
    res.redirect("/register");
  }
});

export default router;
