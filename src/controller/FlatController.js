const flatschema = require('../models/FlatModel')
const getAllFlat = async(req,res)=>{

    const flats = await  flatschema.find().populate(['user','society']);
    res.status(201).json({
        data:flats,
        message:"Successfully got all the flats"
    })
}

const addFlat = async(req,res) => {

    const flatDetails = {
        type:req.body.type,
        interiorType:req.body.interiorType,
        sqrFt:req.body.sqrFt,
        price:req.body.price,
        status:req.body.status,
        location:req.body.location,
        user:req.body.user,
        review:req.body.review,
        availabilityForRent:req.body.availabilityForRent,
        society:req.body.society,
    }

    const newFlat = await flatschema.create(flatDetails);
    res.status(201).json({
        data:newFlat,
        message:'New Flat Created'
    })
}

const deleteFlat = async(req,res)=>{
    const id = req.params.id;
    const removeFlat = await flatschema.findByIdAndDelete(id)
    if(removeFlat){
        res.status(200).json({
            data:removeFlat,
            message:'Deleted Successfully'
        })
    }
    else{
        res.status(404).json({
            message:'No such flat found'
        })
    }
}
const updateFlat = async (req,res) => {

    const id = req.params.id;
    const updatedFlat = await  flatschema.findByIdAndUpdate(id ,req.body)
    if(updatedFlat){
        res.status(201).json({
            data:updatedFlat,
            message:"Updated Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"No Such Flat Updated"
        })
    }
}

const  getSingleFlat = async (req,res)=>{

        const id = req.body.id;
        const flat = await flatschema.findOne(id)
        if(flat){
            res.status(200).json({
                data:flat,
                message:"Flat Fetched Successfully"
            })
        }
        else{
            res.status(404).json({
                data:flat,
                message:"Flat not Fetched Successfully"
            })
        }
    
    }


module.exports = {
    getAllFlat,
    addFlat,
    deleteFlat,
    updateFlat,
    getSingleFlat
}