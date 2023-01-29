const express = require('express');
const app = express();
const dashboardRoutes = require('./routes/dashboard');
const guideRoutes = require('./routes/guide');


// Allow CORS from localohost:3000
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use the router to handle requests
app.use('/dashboard', dashboardRoutes);
app.use('/guide', guideRoutes);

// Start the server
const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});