const jwt = require('jsonwebtoken')
import express, { NextFunction } from "express";

import tokenResponse from "../models/auth/tokenResponse";
import userAuthInfo from "../models/auth/userAuthInfo";

const Token = {
    createJWT(userInfo:userAuthInfo):tokenResponse {

        let user_encoded_info = {
            "userId": userInfo.userId,
            "userName": userInfo.userName
        }

        const token = jwt.sign(user_encoded_info, process.env.PRIMARY_GEN_KEY)

        // should be stored on db to make sure refresh token is valid
        const refresh = jwt.sign(user_encoded_info, process.env.REFRESH_GEN_KEY)

        const response:tokenResponse = {
            token: token,
            refreshToken: refresh,
        }

        return response;
        
    },

    authenticateToken(req:Request, res:Response, next:NextFunction) {
        const requestHeader:string = req.headers['authorization']
        const token = requestHeader && requestHeader.split(" ")[1]

        if (token == null) return res.sendStatus(401)

        
    }
}


export default Token