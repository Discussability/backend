import express from 'express'
const jwt = require("./routes/JWTEndpoints")

const router = express.Router();

router.use("/", jwt)


module.exports = router