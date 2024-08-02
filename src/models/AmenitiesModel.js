const mongoose = require( 'mongoose' );
const schema = mongoose.Schema

const AmenitiesSchema = new  schema({
    name:[{
        type:String
    }]
})

module.exports = mongoose.model('Amenities',AmenitiesSchema)