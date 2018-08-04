const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
//CAN I ALSO JUST ADD THE BOOTSTRAP NPM AND NOT WORRY ABOUT THE CDN LINKS IN HTML FILES?

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// Routes
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});