import express from 'express'
import bodyParser from 'body-parser'
import UserAuthInfo from '../../../models/auth/userAuthInfo'
import tokenResponse from '../../../models/auth/tokenResponse'
import Token from "../../../auth/token"

const router = express.Router()

const jsonParser = bodyParser.json()

// post request contains login info (email+password?)
// - should pass info into a generate token function that verifies if it matches account
// - should return a JSON containing token + refreshtoken that has user identification
router.post("/login", jsonParser,(req, res) => {

    console.log(req.body)

    try {
        // const returnToken = Token.createJWT()
    }
    catch {
        console.log("oopsie error joe mama")
    }

})

router.get("/test", (req, res) => {
    res.send("test")
})


module.exports = router