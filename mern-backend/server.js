const express = require("express");
const cors = require("cors");
require("dotenv").config();

// DB connection
require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("MERN API Running...");
});

app.listen(process.env.PORT, () => {
  console.log(`MERN Server running on port ${process.env.PORT}`);
});