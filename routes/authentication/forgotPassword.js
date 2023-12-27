import { sendOtpEmail } from "../../services/otpEmail.service.js";
import express from "express";
import { checkNotAuthenticated } from "../../utils/passport.js";
import authenticationService from "../../services/authentication.service.js";

const router = express.Router();

router.get("/forgot-password", (req, res) => {
  res.render("authentication/enterEmailToSendOtp");
});

router.post("/enter-otp", checkNotAuthenticated, async (req, res) => {
  const user = await authenticationService.findByEmail(req.body.Email);

  if (user) {
    res.render("authentication/enterPassword");

    const otp = Math.floor(100000 + Math.random() * 900000);
    await authenticationService.updateOtp(user.ID, otp);

    sendOtpEmail(req.body.Email, otp);
  } else {
    res.render("authentication/error");
  }
});

router.post("/reset-password", checkNotAuthenticated, async (req, res) => {
  const { OTP } = req.body;
  const user = await authenticationService.findByEmail(req.body.Email);

  if (user && user.OTP && user.OTP.toString() === OTP.toString()) {
    await authenticationService.updateOtp(user.ID, null);

    res.render("authentication/updatePassword");
  } else {
    res.render("authentication/error");
  }
});

export default router;
