const jwt = require("jsonwebtoken");
const { secret } = require("./config");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  token
    ? jwt.verify(token, secret, function (err) {
        if (err) {
          return res.status(401).json({
            auth: false,
            message: "Failure to authenticate token",
          });
        }
        next();
      })
    : res.status(401).json("No Token provides");
};
