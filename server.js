const express = require('express');
const app = express();
const port = 3000; // Change to your desired port

// Custom middleware to check working hours
const checkWorkingHours = require('./middleware');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up the template engine (EJS in this example)
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use the custom middleware to check working hours for all routes
app.use(checkWorkingHours);

// Home route
app.get('/', (req, res) => {
  res.render('home');
});


// Service route
app.get('/services', (req, res) => {
  res.render('services');
});


// Contact route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
