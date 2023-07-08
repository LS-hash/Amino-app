const express = require("express");
const router = express.Router();

// Import individual route groupings
const quizRoutes = require("./quiz");
const infoRoutes = require("./info");
const gameRoutes = require("./game");

// Use the individual route groupings
router.use("/quiz", quizRoutes);
router.use("/info", infoRoutes);
router.use("/game", gameRoutes);

module.exports = router;

// In routes / index.js, I'm importing individual route groupings
// and assigning them to their respective endpoints under / api.
