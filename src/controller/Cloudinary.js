const cloudinary = require('cloudinary').v2

const uploadimg = async(file) =>{

    cloudinary.config({ 
        cloud_name: "dv7ac6t4k", 
        api_key: "524881459971187", 
        api_secret: "eH0S3MUCT-Fi74nU2iJ4qiqMNqE" 
      });
      const result = await cloudinary.uploader.upload(file.path)
      return result
}
module.exports = {
    uploadimg
}