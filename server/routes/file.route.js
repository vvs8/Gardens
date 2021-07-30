let express = require('express');
let mongoose = require('mongoose');
let multer = require('multer');
let router = express.Router();

router.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
    console.log('Done')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single('profileImg')

router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.sendStatus(500);
        console.log('error')
      }
      console.log('GOOD')
      res.send(req.file);
    });
  });

module.exports = router;