import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.hashed_password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req, "next");
    return next();
  }
  res.redirect("/login");
}
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req, "redirect to /phuong");
    return res.redirect("/phuong");
  }
  next();
}

export default initialize;
export { checkAuthenticated, checkNotAuthenticated };
