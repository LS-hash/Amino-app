const express = require("express");
const router = express.Router();

// Define routes for quiz
router.get("/", (req, res) => {
  // Implement your code here to fetch quiz data and send as response
  res.send("Quiz data");
});

module.exports = router;

// In quiz.js, I have defined a simple GET route.
// When a client sends a GET request to / api / quiz,
// server will respond with the string "Quiz data"
