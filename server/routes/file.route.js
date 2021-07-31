let express = require('express');
let mongoose = require('mongoose');
let multer = require('multer');
let router = express.Router();

let File = require('../models/File');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
    console.log('Done')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
        }
    }
});

router.post('/upload', upload.array('image', 8), (req, res, next) => {
    const reqFiles = [];

    const url = req.protocol + '://' + req.get('host')

    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }

    const user = new File({
        _id: new mongoose.Types.ObjectId(),
        imagesArray: reqFiles
    });

    user.save().then(result => {
        res.status(201).json({
            message: "Uploaded!",
            userCreated: {
                _id: result._id,
                imagesArray: result.imagesArray
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})


module.exports = router;