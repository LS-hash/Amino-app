const express = require("express");
const app = express();
const connectDB = require("../database/MongoDBDatabase"); // Assume MongoDBDatabase.js exports a function to connect to your database
const routes = require("../routes");

// Connect to the database
connectDB();

// Use the routes
app.use("/api", routes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// In the above server.js file, I'm importing  routes
// from routes / index.js and using them at the / api endpoint.
// This means all routes defined will be sub - routes of / api.
