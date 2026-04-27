const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");

// 👉 ADD THIS
const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);

// 👉 ADD THIS PROTECTED ROUTE
router.get("/me", auth, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});

module.exports = router;