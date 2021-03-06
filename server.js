var express = require('express');
var app     = express();
var multer  = require('multer')
var cors    = require('cors')

app.use(cors())

var storage = multer.diskStorage({
    // folder you specified
    destination: function (req, file, cb) {
      // cb(null, 'public')
       cb(null, 'src/uploads')
    },
    // file name of the ocr
    filename: function (req, file, cb) {
      cb(null, "image.jpg" )
      //console.log("ile is:",file.encoding);
    }
})
  
var upload = multer({ storage: storage }).array('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
       	if (err instanceof multer.MulterError) {
        	return res.status(500).json(err)
       	} else if (err) {
        	return res.status(500).json(err)
       	}
      	return res.status(200).send(req.file)
    })

});

app.listen(8000,function(){
	console.log('App running on port 8000')
})