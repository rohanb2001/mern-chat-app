const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "60d",
  });
};

// If the chats are not showing that means the JWT token get expired then logout and re login with emil and password or with guest user credentials.

module.exports = generateToken;
