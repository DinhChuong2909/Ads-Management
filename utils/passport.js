import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (Email, Password, done) => {
    const user = await getUserByEmail(Email);
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(Password, user.Hashed_password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "Email" }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.ID));
  passport.deserializeUser((ID, done) => {
    return done(null, getUserById(ID));
  });
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // console.log(req, "next");
    return next();
  }
  res.redirect("/login");
}
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // console.log(req, "redirect to /phuong");
    return res.redirect("/phuong");
  }
  next();
}

export default initialize;
export { checkAuthenticated, checkNotAuthenticated };
