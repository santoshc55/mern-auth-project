const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getItems,
  createItem,
  deleteItem,
} = require("../controllers/itemController");

// ✅ GET ITEMS
router.get("/", auth, getItems);

// ✅ CREATE ITEM
router.post("/", auth, createItem);

// ✅ DELETE ITEM
router.delete("/:id", auth, deleteItem);

module.exports = router;