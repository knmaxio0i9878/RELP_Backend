const mongoose = require('mongoose')
const schema = mongoose.Schema;

const ShopSchema = new schema({
    interiorType:{
        type: String,
    },
    sqrft:{
        type: String,
    },
    location:{
        type: String,
    },
    price:{
        type: String,
    },
    user:{
        type:schema.Types.ObjectId,
        ref:"User"
    },
    review:{
        type: String,
    },
    status:{
        type: String,
    },
    isAvailableForRent:{
        type: String
    }

})

module.exports=mongoose.model("Shops",ShopSchema)