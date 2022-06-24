const jwt = require("jsonwebtoken");
const User = require("../db/moduls/users.js");

const auth = async (req, res, next) => {
  console.log("auth middleware");
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // console.log(token);
    const decoded = jwt.verify(token, "thisismynewcourse");
    console.log(decoded);
    // Probably to allow user to access from different devices simultanously
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Error: Please autenticate");
  }
};

module.exports = auth;
