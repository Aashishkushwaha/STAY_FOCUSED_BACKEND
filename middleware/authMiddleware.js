const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];
    const token = authorization && authorization.split("Bearer ")[1];
    if (!token)
      return res.status(401).json({ code: 401, message: "Unauthorized" });

    const decodedUser = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedUser)
      return res.status(401).json({ code: 401, message: "Unauthorized" });

    req.username = decodedUser.username;

    next();
  } catch (err) {
    return res.status(500).json({ code: 500, message: err.message });
  }
};

module.exports = authMiddleware;
