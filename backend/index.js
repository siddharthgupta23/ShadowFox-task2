// const port=4000;
// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const jwt=require("jsonwebtoken");
// const multer=require("multer");
// const path=require("path");
// const cors=require("cors");
// app.use(express.json());
// app.use(cors());

// const storage=multer.diskStorage({
//     destination: './upload/images',
//     filename: (req,file,cb)=>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// app.get("/",(req,res)=>{
// res.send("Express App is running")
// })
// const upload=multer({storage:storage})
// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })
// const Product=mongoose.model("Product",{
//     id:{
//         type:Number,
//         required:true,

//     },
//     name:{
//        type:String,
//        required:true,
//     },
//     image:{
//         type:String,
//         required:true,

//     },
//     category:{
//         type:String,
//         required:true,

//     },
//     new_price:{
//         type:String,
//         required:true,

//     },
//     old_price:{
//         type:String,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default: true,

//     },
// })
// app.post('/addproduct',async(req,res) =>
// {
//     const product =new Product({
//         id:req.body.id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//         date:req.body.date,
//         available:req.body.available,

        
//     })
// })
// app.listen(port,(error) =>{
// if(!error)
// {
//     console.log("Server is running on port "+ port);
// }else{
//     console.log("Error:" + error);
// }
// })
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());



// Multer storage configuration
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use('/images', express.static('upload/images'));

// Define the Product model
const Product = mongoose.model("Product", new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: String,
        required: true
    },
    old_price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
}, { collection: 'uploads' }));

// Root endpoint
app.get("/", (req, res) => {
    res.send("Express App is running");
});

// Image upload endpoint
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Add product endpoint
app.post('/addproduct', async (req, res) => {
    try {
        const product = new Product({
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            date: req.body.date,
            available: req.body.available
        });
        
        await product.save();
        res.status(201).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to add product', error: error.message });
    }
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});


