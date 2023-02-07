const express = require("express");
const app = express();
app.use(express.json());
const dashboardRoutes = require("./routes/dashboard");
const guideRoutes = require("./routes/guide");

app.options("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Headers",
    req.header("Access-Control-Request-Headers")
  );
  res.header("Content-Type", "application/json");
  res.sendStatus(200);
});

// Allow CORS from localohost:3000
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Use the router to handle requests
app.use("/dashboard", dashboardRoutes);
app.use("/guide", guideRoutes);

// Start the server
const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
