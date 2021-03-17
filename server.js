// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Listening
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});