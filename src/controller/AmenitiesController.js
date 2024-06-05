const amenitiesSchema = require('../models/AmenitiesModel')


const getAmenities = async(req,res) =>{

    const allAmenities = await amenitiesSchema.find() 
    res.status(200).json({
        data:allAmenities,
        message:"All Amenities Fetched Successfully"
    })
}

const addAmenities = async(req,res)=>{

    const newAmenities = {
        name: req.body.name,
        status:true
    }
    const amenities = await amenitiesSchema.create(newAmenities)
    if(amenities){
        res.status(201).json({
            data:amenities,
            message:"Amenities added Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"Amenities not added Successfully"
        })
    }
}


const deleteAmenities = async(req,res)=>{
    const id = req.params.id;
    const removeAamenities = await amenitiesSchema.findByIdAndDelete(id)
    if(removeAamenities){
        res.status(200).json({
            data:removeAamenities,
            message:'Amenities deleted Successfully'
        })
    }
    else{
        res.status(404).json({
            message:'No such Amenities found'
        })
    }
}
const updateAmenities = async (req,res) => {

    const id = req.params.id;
    const updatedAmenities = await amenitiesSchema.findByIdAndUpdate(id ,req.body)
    if(updatedAmenities){
        res.status(201).json({
            data:updatedAmenities,
            message:"Updated Amenities Successfully"
        })
    }
    else{
        res.status(404).json({
            message:"No Such Amenities Updated"
        })
    }
}

const  getSingleAmenities = async (req,res)=>{

        const id = req.body.id;
        const amenities = await amenitiesSchema.findOne(id)
        if(amenities){
            res.status(200).json({
                data:amenities,
                message:"Amenities Fetched Successfully"
            })
        }
        else{
            res.status(404).json({
                message:"Amenities not Fetched Successfully"
            })
        }
    
    }



module.exports = {
    getAmenities,
    addAmenities,
    deleteAmenities,
    updateAmenities,
    getSingleAmenities
}