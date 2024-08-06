const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flatSchema = new Schema({

    type:{
        type:String
    },
    interiorType:{
        type:String,
    },
    sqrft:{
        type:String
    },
    price:{
        type:String
    },
    status:{
        type:String
    },
    location:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    review:{
        type:String
    },
    avialablityForRent:{
        type:String
    },
    society:{
        type: Schema.Types.ObjectId,
        ref: "Society"
    },
    city:{
        type:String,
    },
    address:{
        type:String
    },
    imgUrl:{
        type:String
    }
})

module.exports = mongoose.model("Flat",flatSchema)
