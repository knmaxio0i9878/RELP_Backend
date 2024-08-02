const flatschema = require('../models/FlatModel')
const multer = require('multer')
const cloudinary = require('./CloudinaryUtil')
const getAllFlat = async (req, res) => {

    const flats = await flatschema.find().populate(['user', 'society']);
    res.status(201).json({
        data: flats,
        message: "Successfully got all the flats"
    })
}
const storage = multer.diskStorage({
    destination: "./upload/",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/txt") {
            cb(null, true);
        }
        else {
            cb(null, false);
        }
    }
}).single("makaanFile");


const addFlat = async (req, res) => {

    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log('if...',err);
                res.status(500).json({
                    message: "File Upload Failed"
                })
            }

            else {
                const result = await cloudinary.uploadimg(req.file)
                console.log("result..",result)
                const flatDetails = {
                    type: req.body.type,
                    interiorType: req.body.interiorType,
                    sqrFt: req.body.sqrFt,
                    price: req.body.price,
                    status: req.body.status,
                    location: req.body.location,
                    user: req.body.user,
                    review: req.body.review,
                    availabilityForRent: req.body.availabilityForRent,
                    // society: req.body.society,
                    imgUrl:result.secure_url
                }
            
                const newFlat = await flatschema.create(flatDetails);
                res.status(201).json({
                    data: newFlat,
                    message: 'New Flat Created'
                })
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "File Upload Failed"
        })
    }
    
}

const deleteFlat = async (req, res) => {
    const id = req.params.id;
    const removeFlat = await flatschema.findByIdAndDelete(id)
    if (removeFlat) {
        res.status(200).json({
            data: removeFlat,
            message: 'Deleted Successfully'
        })
    }
    else {
        res.status(404).json({
            message: 'No such flat found'
        })
    }
}
const updateFlat = async (req, res) => {

    const id = req.params.id;
    const updatedFlat = await flatschema.findByIdAndUpdate(id, req.body)
    if (updatedFlat) {
        res.status(201).json({
            data: updatedFlat,
            message: "Updated Successfully"
        })
    }
    else {
        res.status(404).json({
            message: "No Such Flat Updated"
        })
    }
}

const getSingleFlat = async (req, res) => {

    const id = req.params.id;
    const flat = await flatschema.findById(id).populate("society").populate("user")
    if (flat) {
        res.status(200).json({
            data: flat,
            message: "Flat Fetched Successfully"
        })
    }
    else {
        res.status(404).json({
            data: flat,
            message: "Flat not Fetched Successfully"
        })
    }

}
const getSocietyByFlatId = async (req, res) => {
    const flatId = req.params.flatId;
    console.log(flatId);

    const society = await flatschema.findById(flatId).populate('society').populate({
        path: 'society',
        populate: {
            path: 'amenities', // This populates the 'amenities' field in the 'society' document
            model: 'Amenities' // Ensure 'Amenities' model is imported and correctly referenced
        }
    });
    console.log(society);
    if (society) {
        res.status(200).json({
            data: society.society,
            message: "Society Fetch Successfully"
        })
    }
    else {
        res.status(200).json({
            data: society.society,
            message: "Society Fetch Successfully"
        })
    }


}


module.exports = {
    getAllFlat,
    addFlat,
    deleteFlat,
    updateFlat,
    getSingleFlat,
    getSocietyByFlatId
}