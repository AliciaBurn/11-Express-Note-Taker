const express = require("express")
// const apiRoutes = require("./routes/apiRoutes")
// const htmlRoutes = require("./routes/htmlRoutes")

//intialize the app and create a PORT
const app = express();
const PORT = process.env.PORT || 8080;

//Setup body parsing, static, routes
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// var apiRoutes = require("./routes/apiRoutes")(app);
// var htmlRoutes = require("./routes/htmlRoutes")(app);

// app.use("/api", apiRoutes)
// app.use("/", htmlRoutes)
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(`app is listen on ${PORT}`)
});