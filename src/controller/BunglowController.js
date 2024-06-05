const bunglowSchema = require('../models/BunglowModel')
const getAllBunglow = async(req,res)=>{

    const bunglows = await  bunglowSchema.find().populate(['amenities','pincode']);
    res.status(201).json({
        data:bunglows,
        message:"Successfully got all the Bunglows"
    })
}
const addBunglow = async(req,res) => {

    const bunglowDetails = {
        type:req.body.type,
        interiorType:req.body.interiorType,
        area:req.body.area,
        price:req.body.price,
        amenities:req.body.amenities,
        pincode:req.body.pincode,
        review:req.body.review,
        status:req.body.status,
        availabilityForRent:req.body.availabilityForRent,
        
    }

    const newBunglow = await bunglowSchema.create(bunglowDetails);
    res.status(201).json({
        data:newBunglow,
        message:'New Bunglow Created'
    })
}

const deleteBunglow = async(req,res)=>{
    const id = req.params.id;
    const removeBunglow = await bunglowSchema.findByIdAndDelete(id)
    if(removeBunglow){
        res.status(200).json({
            data:removeBunglow,
            message:'Bunglow Deleted Successfully'
        })
    }
    else{
        res.status(404).json({
            message:'No such Bunglow found'
        })
    }
}
const updateBunglow = async (req,res) => {

    const id = req.params.id;
    const updatedBunglow = await  bunglowSchema.findByIdAndUpdate(id ,req.body)
    if(updatedBunglow){
        res.status(201).json({
            data:updatedBunglow,
            message:"Bunglow Updated Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"No Such Bunglow Updated"
        })
    }
}

const  getSingleBunglow = async (req,res)=>{

        const id = req.body.id;
        const Bunglow = await bunglowSchema.findOne(id)
        if(Bunglow){
            res.status(200).json({
                data:Bunglow,
                message:"Bunglow Fetched Successfully"
            })
        }
        else{
            res.status(404).json({
                data:Bunglow,
                message:"Bunglow not Fetched Successfully"
            })
        }
    
    }


module.exports = {
   addBunglow,
   getAllBunglow,
   deleteBunglow,
   getSingleBunglow,
   updateBunglow
}