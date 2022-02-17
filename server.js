const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Defining Controllers for API
app.use('/api/persons', require('./controllers/personsController'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });