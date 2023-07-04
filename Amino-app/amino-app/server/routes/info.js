const express = require("express");
const router = express.Router();

// Define routes for info
router.get("/", (req, res) => {
  // Implement your code here to fetch info data and send as response
  res.send("Info data");
});

router.get("/:id", (req, res) => {
  // Implement your code here to fetch specific info data using req.params.id and send as response
  res.send("Info data for ID " + req.params.id);
});

router.listen();

module.exports = router;

// In the above info.js file, I've defined two routes:

// GET /api/info will respond with the string "Info data".
//GET /api/info/:id will respond with the string "Info data for ID " plus the provided ID. The :id part in the URL is a route parameter, and you can access its value with req.params.id.
