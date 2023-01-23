const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (error) {
    req.status(500).json(err);
  }
});

router.get("/", async (_req, res) => {
  try {
    const categoryies = await Category.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(categoryies);
  }
});
module.exports = router;
