const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "BETLOG API is running!",
    status: "success",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    app: "BETLOG",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("BETLOG server running on port " + PORT);
});
