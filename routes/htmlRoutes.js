const path = require("path")
const router = require("express").Router()


router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/assets/js/index.js"))
});

router.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "/assets/css/style.css"))
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

module.exports = router