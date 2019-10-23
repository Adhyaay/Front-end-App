const errors = require("restify-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../auth");
const config = require("../config");
const authMid = require("../middleware/auth");

module.exports = server => {
  // regitser User
  server.post("/api/register", async (req, res, next) => {
    // console.log(req.body);
    const { email, password, name, college, branch, year, phone } = req.body;
    // console.log("email",email,"password",password);
    if (
      !email ||
      !password ||
      !name ||
      !college ||
      !branch ||
      !phone ||
      !year
    ) {
      const message = "Please fill all the fields";
      return next(new errors.BadRequestError(message));
    }

    if (await User.findOne({ email: email })) {
      const message = 'email "' + email + '" is already registered';
      return next(new errors.ServiceUnavailableError(message));
    }

    const user = new User({
      email: email,
      password: password,
      name: name,
      college: college,
      branch: branch,
      year: year,
      phone: phone
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        // Hash Password
        user.password = hash;
        // Save User
        try {
          const newUser = await user.save();

          const token = jwt.sign(user.toJSON(), config.JWT_SECRET, {
            expiresIn: "1d"
          });

          res.json({
            token,
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
              college: user.college,
              branch: user.branch,
              year: year,
              phone: user.phone
            }
          });
          next();
        } catch (err) {
          return next(new errors.InternalError(err.message));
        }
      });
    });
  });

  // Auth User
  server.post("/api/auth", async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      const message = "Please fill all the fields";
      return next(new errors.BadRequestError(message));
    }

    try {
      // Authenticate SUser
      const user = await auth.authenticate(email, password);

      // Create JWT
      const token = jwt.sign(user.toJSON(), config.JWT_SECRET, {
        expiresIn: "1d"
      });

      const { iat, exp } = jwt.decode(token);
      // respond with Token
      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          college: user.college,
          branch: user.branch,
          year: user.year,
          phone: user.phone
        }
      });
      next();
    } catch (err) {
      // User unathorized
      return next(new errors.UnauthorizedError(err));
    }
  });

  // route to get user data
  server.get("/api/auth/user", authMid, (req, res, next) => {
    // console.log(req.user);
    User.findById(req.user._id)
      .select("-password")
      .then(user => res.json(user));
  });
};
