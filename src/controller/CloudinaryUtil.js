const cloudinary = require('cloudinary').v2

const uploadimg = async(file) =>{

    cloudinary.config({ 
        
    cloud_name: "drl7llkoc", 
    api_key: "157484768788431", 
    api_secret: "Hs6n57QLpFTa7sLsXTWT77YZPeI"  
      });
      const result = await cloudinary.uploader.upload(file.path)
      return result;
}
module.exports = {
    uploadimg
}