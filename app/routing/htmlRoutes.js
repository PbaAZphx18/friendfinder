var path = require("path");  

module.exports = function (app) {

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/survey.html"));
    // console.log('survey.html');
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
    console.log('home.html');
  });




  // DEFAULTS TO HOMEPAGE IF NO ROUTE FOUND
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });
};