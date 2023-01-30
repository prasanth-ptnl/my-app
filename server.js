const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/my-app", { useNewUrlParser: true });

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
