const express = require("express");
const User = require("../model/User"); // Adjust path as needed
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({
    $or: [{ email: login }, { username: login }],
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ message: "Invalid login or password" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).send({ message: "User already exists" });
  }

  const user = new User({ username, email, password });
  await user.save();

  // You can also generate a token here and log the user in immediately after registration
  res.status(201).send({ message: "User created successfully" });
});

module.exports = router;
