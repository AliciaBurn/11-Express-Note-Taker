var path = require("path");

module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "public/notes.html"));
    });

    app.get("../public/assets/js/index.js", function(req,res){
        res.sendFile(path.join(__dirname, "public/assets/js/index.js"))
    });
    app.get("../public/assets/css/style.css", function(req,res){
        res.sendFile(path.join(__dirname, "public/assets/css/style.css"))
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"));
      });
}