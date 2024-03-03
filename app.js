const express = require ("express")
const router = require ("./routes")
const app = express()
const port = 3000
app.use(router)

app.set("view engine, ejs")
app.use(express.static("visual"))
app.use(express.urlencoded({extended : false}))

app.listen(port, () => console.log("server running on port", port))