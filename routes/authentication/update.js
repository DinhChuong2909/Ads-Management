import express from "express";
import bcrypt from "bcryptjs";
import { checkAuthenticated } from "../../utils/passport.js";
import authenticationService from "../../services/authentication.service.js";
import convertStringToDate from "../../utils/dateConverter.js";

const router = express.Router();

router.get("/update-password", checkAuthenticated, (req, res) => {
  res.render("authentication/updatePassword");
});

router.post("/update-password", checkAuthenticated, async (req, res) => {
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

router.get("/update-information", checkAuthenticated, (req, res) => {
  res.render("authentication/updateInformation");
});

router.post("/update-information", checkAuthenticated, async (req, res) => {
  try {
    const user = await authenticationService.findByEmail(req.body.currentemail);

    const newName = req.body.name;
    const newEmail = req.body.email;
    const newDOB = convertStringToDate(req.body.dob);
    const newPhone = req.body.phone;

    async function updateIfValid(value, updateFunction) {
      if (value !== undefined && value !== null && value !== "") {
        await updateFunction();
      }
    }
    await updateIfValid(newName, () =>
      authenticationService.updateName(user.id, newName)
    );
    await updateIfValid(newEmail, () =>
      authenticationService.updateEmail(user.id, newEmail)
    );
    if (newDOB instanceof Date && !isNaN(newDOB)) {
      await updateIfValid(newDOB, () =>
        authenticationService.updateDOB(user.id, newDOB)
      );
    }
    await updateIfValid(newPhone, () =>
      authenticationService.updatePhone(user.id, newPhone)
    );
  } catch (error) {
    console.log("Post failed", error);
    res.redirect("/updatePassword");
  }
});

export default router;
