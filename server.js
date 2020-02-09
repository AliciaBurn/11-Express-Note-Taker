const express = require("express")
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

//intialize the app and create a PORT
const app = express()
const PORT = process.env.PORT || 3000

//Setup body parsing, static, routes
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, function() {
    console.log(`app is listen on ${PORT}`)
})