
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
    cb(null, 'public/assets'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  },
});

const upload = multer({ storage });


app.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const fileAddress = req.file.path;
    res.json({ address: fileAddress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

















  const port = process.env.PORT || 3001;
  app.listen(port, ()=>{
      console.log(`App Listening at Port ${port}`)
  })


const productRoutes = require('./Routes/Product');
app.use('/products', productRoutes);


const DB = "mongodb+srv://vimea:12345@vimea.fu06wla.mongodb.net/admin"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Database connected"))
.catch((error)=> console.log(error.message));
