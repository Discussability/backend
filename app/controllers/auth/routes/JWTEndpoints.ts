import express from 'express'
import bodyParser from 'body-parser'
import { loginRequst, tokenResponse, userEncodedInfo } from '../../../models/auth/authModels'
import Token from '../../../auth/token'

const router = express.Router()

const jsonParser = bodyParser.json()

// post request contains login info (email+password?)
// - should pass info into a generate token function that verifies if it matches account
// - should return a JSON containing token + refreshtoken that has user identification
router.post("/login", jsonParser,(req, res) => {

    console.log(req.body)

    try {
        const loginInfo:loginRequst = req.body;

        // all below logic should be put in the createToken method?? or a new controlling login "class"? or could be put here
        // the next step is it should pass the login info through several layers
        // layer 1: should check to make sure it is a valid password that matches the email
        // Layer 2: should make a db call that gets the rest of the data for userEncodedInfo
        // Layer 3 - built: takes userEncodedInfo and returns a jwtResponse including token

    }
    catch {
        console.log("oopsie error joe mama")
    }

})


// used to test various random things
router.post("/testGen", (req, res) => {
    const userInfo:userEncodedInfo = req.body;

    const jwt:tokenResponse = Token.createJWT(userInfo);

    res.send(jwt)
})


module.exports = router