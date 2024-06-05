const jwt = require('jsonwebtoken');
const secretKey = "parth123"
const generateToken = (payload)=>{

    const token = jwt.sign(payload,secretKey)
    console.log("token...",token);
    return token;
}
module.exports={generateToken};