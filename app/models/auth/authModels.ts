// TODO: refactor each section into own files yawn




// models for endpoint requests/responses
interface tokenResponse {
    token:string;
    refreshToken:string
}

interface loginRequst {
    email:string,
    password:string,
}



// models for future db

interface userAuthInfo {
    userId:string;
    userName:string;
    email:string;
    password:string;
}



// models for jwt creation

interface userEncodedInfo {
    userId:string,
    userName:string
}


export {
    loginRequst,
    tokenResponse,
    userAuthInfo,
    userEncodedInfo,
}