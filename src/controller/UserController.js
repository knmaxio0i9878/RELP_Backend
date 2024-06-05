const userSchema = require('../models/UserModel')
const tokenUtil = require('../util/TokenUser')
const password = require('../util/PasswordEncrypt')
const Mail = require('../util/Email')

const getUsers = async(req,res) =>{

    const allUsers = await userSchema.find() 
    res.status(200).json({
        data:allUsers,
        message:"All users Fetched Successfully"
    })
}

const addUser = async(req,res)=>{

    const hashedPassword = await password.hashedpassword(req.body.password);
    const newUser = {
        fullname: req.body.fullname,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password:hashedPassword,
        role: req.body.role
    }
    const user = await userSchema.create(newUser)
    await Mail.sendingMail(user.email,"Login Acknowledge","Welcome Makkan Estate")
    if(user){
        const token = tokenUtil.generateToken(user.toObject())
        res.status(201).json({
            data:user,
            token:token,
            message:"User added Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"User not added Successfully"
        })
    }
}


const deleteUser = async(req,res)=>{
    const id = req.params.id;
    const removeUser = await userSchema.findByIdAndDelete(id)
    if(removeUser){
        res.status(200).json({
            data:removeUser,
            message:'User Deleted Successfully'
        })
    }
    else{
        res.status(404).json({
            message:'No such User found'
        })
    }
}
const updateUser = async (req,res) => {

    const id = req.params.id;
    const updatedUser = await  userSchema.findByIdAndUpdate(id ,req.body)
    if(updatedUser){
        res.status(201).json({
            data:updatedUser,
            message:"User Updated Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"No Such User Updated"
        })
    }
}

const  getSingleUser = async (req,res)=>{

    const id = req.body.id;
    const user = await userSchema.findOne(id)
    if(user){
        res.status(200).json({
            data:user,
            message:"user Fetched Successfully"
        })
    }
    else{
        res.status(404).json({
            data:user,
            message:"user not Fetched Successfully"
        })
    }

}





module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getSingleUser
}