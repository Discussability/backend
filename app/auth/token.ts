require("dotenv").config()
const jwt = require('jsonwebtoken')
import express, { Request, Response, NextFunction } from "express";
import { userAuthInfo, tokenResponse, userEncodedInfo } from "../models/auth/authModels";

const Token = {
    createToken: function (userInfo:userEncodedInfo):tokenResponse {

        const token = jwt.sign(userInfo, process.env.PRIMARY_GEN_KEY)

        // should be stored on db to make sure refresh token is valid
        const refresh = jwt.sign(userInfo, process.env.REFRESH_GEN_KEY)

        const response:tokenResponse = {
            token: token,
            refreshToken: refresh,
        }

        return response;
        
    },

    authenticateToken: function authenticateToken(req:Request, res:Response, next:NextFunction) {
        const requestHeader = req.headers['authorization']
        const token = requestHeader && requestHeader.split(" ")[1]

        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.PRIMARY_GEN_KEY, (err:Error, user:userEncodedInfo) => {
            if (err) return res.sendStatus(401);

            req.body.user = user;
            next()
        })
    }
}


export default Token