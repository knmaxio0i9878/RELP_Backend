const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    fullname: {
      type: String,
    },
    mobileNo: {
      type: Number,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      },
    role:{
      type : String,
    }
    
  });

  module.exports = mongoose.model("User",userSchema);