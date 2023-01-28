const express = require('express');
const app = express();
const dashboardRoutes = require('./routes/dashboard');
const guideRoutes = require('./routes/guide');

// Use the router to handle requests
app.use('/dashboard', dashboardRoutes);
app.use('/guide', guideRoutes);

// Start the server
const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});