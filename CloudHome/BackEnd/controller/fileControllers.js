const multer = require("multer");
const FileFolderModel = require("../model/fileSchema");
const { default: cloudinary } = require("../config/cloudinary");

const createFileDocomentMongoDb = async (req, res) => {
  try {
    const data = req.file;
    const { parentId } = req.body;
    const { _id } = req.user;

    const file = await FileFolderModel.create({
      name: data.originalname,
      userId: _id,
      type: "file",
      parentId: parentId === "null" ? undefined : parentId,
      metaData: { multer: data },
    });
    res.status(201).json({
      status: "In progress",
      data: data,
    });

    return file;
  } catch (err) {
    console.log("😿😿😿😿😿😿");
    console.log(err);
    console.log("😿😿😿😿😿😿");
    res.status(500).json({
      status: "Failed",
      message: "Internal Server Error",
    });
    return false;
  }
};

const uploadFileTOCloudinary = async (file, userId, parentId) => {
  try {
    const result = await cloudinary.uploader.upload(file.metaData.multer.path, {
      folder: `Cloud-Home/${file.userId}/${file.parentId}`,
      timeout: 60000,
    });
    try {
      await FileFolderModel.findByIdAndUpdate(file._id, {
        link: result.secure_url || result.url,
        "metaData.cloudinary": result,
      });
      
    } catch (err) {
      console.log("---------------------------------");
      console.log("❌❌❌❌ File UPDATE Error ❌❌❌❌");
      console.log(err);
      console.log("---------------------------------");
    }
  } catch (err) {
    console.log("Error in Cloudnary");
    console.log(err);
  }
};
const createFile = async (req, res) => {
  try {
    const docomentCreated = await createFileDocomentMongoDb(req, res);
    if (docomentCreated) {
      await uploadFileTOCloudinary(docomentCreated);
    }
  } catch (err) {
    console.log("😿😿😿😿😿😿");
    console.log(err);
    console.log("😿😿😿😿😿😿");
    res.status(500).json({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createFile,
};
