const shopSchema = require('../models/ShopModel')

const getShops = async(req,res) =>{

    const allShops = await shopSchema.find().populate('user')
    res.status(200).json({
        data:allShops,
        message:"All Shops Fetched Successfully"
    })
}

const addShops = async(req,res)=>{

    const newShop = {
       interiorType:req.body.interiorType,
       sqrft:req.body.sqrft,
       location:req.body.location,
       price:req.body.price,
       user:req.body.user,
       review:req.body.review,
       status:req.body.status,
       isAvailableForRent:req.body.isAvailableForRent
    }
    const shop = await shopSchema.create(newShop)
    if(shop){
        res.status(201).json({
            data:shop,
            message:"Shop added Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"Shop not added Successfully"
        })
    }
}


const deleteShop = async(req,res)=>{
    const id = req.params.id;
    const removeShop = await shopSchema.findByIdAndDelete(id)
    if(removeShop){
        res.status(200).json({
            data:removeShop,
            message:'Shop Deleted Successfully'
        })
    }
    else{
        res.status(404).json({
            message:'No such Shop found'
        })
    }
}
const updateShop = async (req,res) => {

    const id = req.params.id;
    const updatedShop = await  shopSchema.findByIdAndUpdate(id ,req.body)
    if(updatedShop){
        res.status(201).json({
            data:updatedShop,
            message:"Shop Updated Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"No Such Shop Updated"
        })
    }
}

const  getSingleShop = async (req,res)=>{

    const id = req.body.id;
    const shop = await shopSchema.findOne(id).populate('users')
    if(shop){
        res.status(200).json({
            data:shop,
            message:"Shop Fetched Successfully"
        })
    }
    else{
        res.status(404).json({
            data:shop,
            message:"Shop not Fetched Successfully"
        })
    }

}





module.exports = {
    getShops,
    addShops,
    updateShop,
    deleteShop,
    getSingleShop
}