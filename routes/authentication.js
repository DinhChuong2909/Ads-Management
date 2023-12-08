// show login page
router.get("/login", async (req, res) => {
  try {
    res.render("authentication/signIn", { message: req.flash("error") });
  } catch (e) {
    res.status(500).send();
  }
});

// login authentication
router.post("/authentication/", async (req, res, next) => {
  try {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/users/login",
      badRequestMessage: "The email does not match any account", // change "missing credentials" message
      failureFlash: true,
    })(req, res, next);
  } catch (e) {
    res.status(400).send();
  }
});
