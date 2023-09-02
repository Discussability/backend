import express from 'express'

const endpointController = require("./controllers/controller")

const app = express(); 
const port = 8080

app.use("/", endpointController)
app.get("/hello", (req, res) => {
    res.send("somehwer")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
