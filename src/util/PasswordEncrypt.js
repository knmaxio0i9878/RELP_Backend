const bcrypt = require('bcrypt')
const saltRounds = 10;
const hashedpassword = async(password)=>{
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedpassword = bcrypt.hash(password,salt)
    return hashedpassword;
}
const comparepassword = async(password,hashedpassword) =>{
    const isMatch = await bcrypt.compare(password,hashedpassword)
    return isMatch;
}
module.exports ={
    hashedpassword,
    comparepassword
}
