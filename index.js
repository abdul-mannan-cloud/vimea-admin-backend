
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
app.use(bodyParser.json())



const AWS = require("aws-sdk");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.DO_SPACES_KEY);

const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET
});

s3.listBuckets({}, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});





  const port = process.env.PORT || 3001;
  app.listen(port, ()=>{
      console.log(`App Listening at Port ${port}`)
  })


  const productRoutes = require('./Routes/Product');
  app.use('/products', productRoutes);
  const blogRoutes = require('./Routes/Blog');
  app.use('/blogs', blogRoutes);
  const clientRoutes = require('./Routes/Client');
  app.use('/client', clientRoutes);


const DB = "mongodb+srv://vimea:12345@vimea.fu06wla.mongodb.net/"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Database connected"))
.catch((error)=> console.log(error.message));

// const Product = require('./models/Product');


// app.post('/addproduct', upload.array('images'), (req, res) => {
//   try {
//     const filenames = req.files.map(file => file.filename);
//     const { productName, price, quantity, type, size1, size2, size3, description } = req.body;

//     const product = new Product({
//       _id: new mongoose.Types.ObjectId(),
//       name: productName,
//       description: description,
//       price: price,
//       mainImage: filenames[0],
//       addonImages: filenames.slice(1),
//       quantity: quantity,
//       size: [size1, size2, size3],
//       type: type,
//     });

//     product.save()
//     .then((result) => {
//       console.log(result);
//       res.status(201).json({
//         message: "Product Created Successfully",
//         createdProduct: result,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });






