import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
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

// import LocalStrategy from "passport-local";
// import User from "../models/user";
// import bcrypt from "bcryptjs";

// module.exports = function (passport) {
//   // hàm được gọi khi xác thực thành công để lưu thông tin user vào session
//   passport.serializeUser(function (user, done) {
//     done(null, user._id);
//   });

//   // hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
//   passport.deserializeUser(function (id, done) {
//     User.getUserById(id, function (err, user) {
//       done(err, user);
//     });
//   });

//   //Register
//   passport.use(
//     "local-register",
//     new LocalStrategy(
//       {
//         passReqToCallback: true,
//       },
//       function (req, username, password, done) {
//         findOrCreateUser = function () {
//           //find a user with this username
//           User.findOne(
//             {
//               username: username,
//             },
//             function (err, user) {
//               if (err) {
//                 console.log("Error" + err);
//                 return done(null, false, { message: err });
//               }

//               if (user) {
//                 console.log("User already exists");
//                 return done(null, false, { message: "user already exists" });
//               } else {
//                 var newUser = new User();
//                 newUser.username = username;
//                 newUser.password = createHash(password);
//                 newUser.email = req.param("email");
//                 newUser.name = req.param("name");
//                 newUser.join_date = new Date();

//                 User.addUser(newUser, function (err, user) {
//                   if (err) {
//                     console.log("Error: " + err);
//                     throw err;
//                   } else {
//                     req.flash(
//                       "success",
//                       "Your are now registered and logged in"
//                     );
//                     return done(null, newUser);
//                   }
//                 });
//               }
//             }
//           );
//         };
//         process.nextTick(findOrCreateUser);
//       }
//     )
//   );

//   passport.use(
//     "local-login",
//     new LocalStrategy(
//       {
//         passReqToCallback: true,
//       },
//       function (req, username, password, done) {
//         User.getUserByUsername(username, function (err, user) {
//           if (err) {
//             console.log("Error" + err);
//             return done(err);
//           }

//           if (!user) {
//             console.log("Error : user not found");
//             return done(null, false, req.flash("error", "User not found"));
//           }

//           if (!isValidPassword(user, password)) {
//             return done(null, false, req.flash("error", "Invalid password"));
//           }

//           return done(
//             null,
//             user,
//             req.flash("success", "You are now logged in")
//           );
//         });
//       }
//     )
//   );

//   var createHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
//   };

//   var isValidPassword = function (user, password) {
//     return bcrypt.compareSync(password, user.password);
//   };
// };

// // REF: http://toon.io/understanding-passportjs-authentication-flow/
