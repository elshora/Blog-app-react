const router = require("express").Router();
const User = require("../models/User");
// Register
router.post("/register", async (req, res) => {
  console.log("hi");
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;