
const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

const app = express()
const multer = require("multer");
const cors = require("cors");
const path = require("path");
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.static('public/assets'))


app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });



  const port = process.env.PORT || 3001;
  app.listen(port, ()=>{
      console.log(`App Listening at Port ${port}`)
  })

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})