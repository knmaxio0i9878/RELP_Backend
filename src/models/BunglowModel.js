const mongoose = require( 'mongoose' );
const schema = mongoose.Schema

const BunglowSchema = new schema({
    type:{
        type: String,
    },
    interiorType:{
        type: String,
    },
    area:{
        type: String,
    },
    price:{
        type: String,
    },
    amenities:{
        type :schema.Types.ObjectId, 
        ref:'Amenities'
    },
    pincode:{
        type: schema.Types.ObjectId,
        ref:'Pincode'
    },
    review:{
        type: String,
    },
    status:{
        type: String,
    },
    isAvailableForRent:{
        type: String,
    }
})

module.exports = mongoose.model("Bunglow", BunglowSchema)