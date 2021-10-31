const express = require('express');
const multer = require("multer");
const path = require("path");

//file upload folder
const UPLOADS_FOLDER = "./uploads/";

//define the storage 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UPLOADS_FOLDER);
    },
    filename: (req, file, callback) => {
        //de-structure the file name then convert it into custom format file-name
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(" ")
                            .join("-") + "-" + Date.now();
        
        callback(null, fileName + fileExt);
    }
});

//prepare the final multer upload object
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000, //1MB
    },
    fileFilter: (req, file, callback) => {
        if(file.fieldname === 'avatar'){
            if(
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/jpeg"
            ){
                callback(null, true);
            }else{
                callback(new Error ("Only .jpg, .png or .jpeg format allowed!"));
            }
        }else if(file.fieldname === "doc"){
            if(file.mimetype === "application/pdf"){
                callback(null, true);
            }else{
                callback(new Error("Only .pdf format allowed!"));
            }
        }else{
            callback( new Error ('There was an unknown error!'));
        }
    }
});


// express app initialization
var app = express();

//application route
app.post("/", upload.fields([
    {
        name: "avatar",
        maxCount: 2,
    },
    {
        name: "doc",
        maxCount: 1,
    }
]) ,(req, res, next) => {
    res.send('Your file Uploaded successfully');
});

//default error handler
app.use((err, req, res, next) => {
    if(err){
        if( err instanceof multer.MulterError){
            res.status(500).send("There was an upload error!");
        }else{
            res.status(500).send(err.message);
        }
    }else{
        res.send("Your file Uploaded successfully");
    }
});

app.listen(3000, () => {
    console.log('app is listening at port 3000');
});