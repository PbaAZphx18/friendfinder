 var path = require("path");  //*****why does this one go in here and not apiroutes???*****

module.exports = function(app) {
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

  
    // DEFAULTS TO HOMEPAGE IF NO ROUTE FOUND
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };