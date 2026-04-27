const db = require("../config/db");

// GET all items
exports.getItems = (req, res) => {
  db.query(
    "SELECT * FROM items WHERE user_id = ?",
    [req.user.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

// CREATE item (WITH STATUS)
exports.createItem = (req, res) => {
  const { title, description, status } = req.body;

  db.query(
    "INSERT INTO items (user_id, title, description, status) VALUES (?, ?, ?, ?)",
    [req.user.id, title, description, status || "active"],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Item created" });
    }
  );
};

// UPDATE item
exports.updateItem = (req, res) => {
  const { title, description, status } = req.body;
  const id = req.params.id;

  db.query(
    "UPDATE items SET title=?, description=?, status=? WHERE id=? AND user_id=?",
    [title, description, status, id, req.user.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Item updated" });
    }
  );
};

// DELETE item
exports.deleteItem = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM items WHERE id=? AND user_id=?",
    [id, req.user.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Item deleted" });
    }
  );
};

// GET stats (FINAL REQUIRED FEATURE)
exports.getStats = (req, res) => {
  db.query(
    "SELECT status, COUNT(*) as count FROM items WHERE user_id=? GROUP BY status",
    [req.user.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};