import { sendOtpEmail } from "../../services/otpEmail.service.js";
import express from "express";
import { checkNotAuthenticated } from "../../utils/passport.js";
import authenticationService from "../../services/authentication.service.js";

const router = express.Router();

router.get("/forgot-password", (req, res) => {
  res.render("authentication/enterEmailToSendOtp");
});

router.post("/enter-otp", checkNotAuthenticated, async (req, res) => {
  const user = await authenticationService.findByEmail(req.body.email);

  if (user) {
    res.render("authentication/enterPassword");

    const otp = Math.floor(100000 + Math.random() * 900000);
    await authenticationService.updateOtp(user.id, otp);

    sendOtpEmail(req.body.email, otp);
  } else {
    res.render("authentication/error");
  }
});

router.post("/reset-password", checkNotAuthenticated, async (req, res) => {
  const { otp } = req.body;
  const user = await authenticationService.findByEmail(req.body.email);

  if (user && user.otp && user.otp.toString() === otp.toString()) {
    await authenticationService.updateOtp(user.id, null);

    res.render("authentication/updatePassword");
  } else {
    res.render("authentication/error");
  }
});

export default router;
