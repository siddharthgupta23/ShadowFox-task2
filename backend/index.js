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
// mongoose.connect("mongodb+srv://username:SWb6sflobyH72I0vsdf@cluster0.s4zbegv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

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
    // const port = 4000;
    // const express = require("express");
    // const app = express();
    // const mongoose = require("mongoose");
    // const multer = require("multer");
    // const path = require("path");
    // const cors = require("cors");

    // app.use(express.json());
    // app.use(cors());

    // // Connect to MongoDB
    // mongoose.connect("mongodb+srv://username:SWb6sflobyH72I0vsdf@cluster0.s4zbegv.mongodb.net/Products?retryWrites=true&w=majority&appName=Cluster0", {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });

    // // Multer storage configuration
    // const storage = multer.diskStorage({
    //     destination: './upload/images',
    //     filename: (req, file, cb) => {
    //         cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    //     }
    // });

    // const upload = multer({ storage: storage });

    // // Serve static files
    // app.use('/images', express.static('upload/images'));

    // // Define the Product model
    // const Product = mongoose.model("Product", new mongoose.Schema({
    //     id: {
    //         type: Number,
    //         required: true
    //     },
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     image: {
    //         type: String,
    //         required: true
    //     },
    //     category: {
    //         type: String,
    //         required: true
    //     },
    //     new_price: {
    //         type: String,
    //         required: true
    //     },
    //     old_price: {
    //         type: String,
    //         required: true
    //     },
    //     date: {
    //         type: Date,
    //         default: Date.now
    //     },
    //     available: {
    //         type: Boolean,
    //         default: true
    //     }
    // }, { collection: 'uploads' }));

    // // Root endpoint
    // app.get("/", (req, res) => {
    //     res.send("Express App is running");
    // });

    // // Image upload endpoint
    // app.post("/upload", upload.single('product'), (req, res) => {
    //     res.json({
    //         success: 1,
    //         image_url: `http://localhost:${port}/images/${req.file.filename}`
    //     });
    // });

    // // Add product endpoint
    // app.post('/addproduct', async (req, res) => {
    //     let products=await Product.find({});
    //     let id;
    //     if(products.length>0)
    //     {
    //         let last_product_array=products.slice(-1);
    //         let last_product= last_product_array[0];
    //         id=last_product.id+1;
            
    //     }else{
    //         id=1;
    //     }
    //         const product = new Product({
    //             id: id,
    //             name: req.body.name,
    //             image: req.body.image,
    //             category: req.body.category,
    //             new_price: req.body.new_price,
    //             old_price: req.body.old_price,
            
    //         });
    //         console.log(product);
    //         await product.save();
    //         console.log("saved");
    //         res.json({
    //             success:true,
    //             name:req.body.name,

    //         })

    //     })
    //     // app.post('/removeproduct',async(req,res) => {
    //     // await Product.findOneAndDelete({id:req.body.id});
    //     // console.log("Removed");
    //     // res.json({
    //     //     success:true,
    //     //     name: req.body.name,
    //     // })
    //     // })
    //     app.post('/removeproduct', async (req, res) => {
    //         try {
    //           await Product.findOneAndDelete({ id: req.body.id });
    //           console.log("Removed");
    //           res.json({
    //             success: true,
    //             name: req.body.name,
    //           });
    //         } catch (error) {
    //           console.error('Error removing product:', error);
    //           res.status(500).json({ success: false, message: 'Internal Server Error' });
    //         }
    //       });
          
    //     app.get('/allproducts',async(req,res)=> {
    //         let products= await Product.find({ });
    //             console.log("all products Fetched");
    //             res.send(products);
        
    //     })
        
            

    // // Start the server
    // app.listen(port, (error) => {
    //     if (!error) {
    //         console.log("Server is running on port " + port);
    //     } else {
    //         console.log("Error: " + error);
    //     }
    // });

    const port = 4000;
    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const multer = require("multer");
    const jwt=require("jsonwebtoken");
    const path = require("path");
    const cors = require("cors");
    
    app.use(express.json());
    app.use(cors());
    
    // Connect to MongoDB
    mongoose.connect("mongodb+srv://username:SWb6sflobyH72I0vsdf@cluster0.s4zbegv.mongodb.net/Products?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
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
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        } else {
            id = 1;
        }
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });
        console.log(product);
        await product.save();
        console.log("saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    });
    
    app.post('/removeproduct', async (req, res) => {
        try {
            console.log("Request received to remove product with id:", req.body.id);
            await Product.findOneAndDelete({ id: req.body.id });
            console.log("Removed");
            res.json({
                success: true,
                id: req.body.id,
            });
        } catch (error) {
            console.error('Error removing product:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    });
    
    app.get('/allproducts', async (req, res) => {
        let products = await Product.find({});
        console.log("all products Fetched");
        res.send(products);
    });
    

    const User =mongoose.model('User',{
        name:{
            type:String,
        },
        email:{
            type:String,
            unique: true,
        },
        password:{
            type:String,
        },
        cartData:{
            type:Object,
        },
        date:{
            type: Date,
            default:Date.now,
        },
    })
    app.post('/signup',async(req,res)=>{
        let check=await User.findOne({email:req.body.email})
        if(check)
        {
            return res.status(400).json({success:false,errors:"Existing  user found with the same email address"})
        }
        let cart={};
        for(let i=0;i<300;i++)
        {
            cart[i]=0;

        }
        const user=new User({
            name:req.body.username,
            email:req.body.email,
            password:req.body.password,
            cartData:cart,

        })
        await user.save();
        const data={
            user:{
                id:user.id
            }
        }
        const token =jwt.sign(data, 'secret_ecom');
        res.json({success: true,token})
        })
        
        
        app.post('/login',async(req,res)=>
    {
        let user=await User.findOne({email:req.body.email});
        if(user)
        {
            const passMatch=req.body.password === user.password;
            if(passMatch)
            {
                const data ={
                    user:{
                        id: user.id,
                    }

                }
                const token=jwt.sign(data,'secret_ecom');
                res.json({success:true,token})
            } else {
             res.json({success:false,errors:"Wrong Password"});
            }
            
        }
        else{
            res.json({success:false,errors:"Wrong Email Address"})
        }
    })





    // Start the server
    app.listen(port, (error) => {
        if (!error) {
            console.log("Server is running on port " + port);
        } else {
            console.log("Error: " + error);
        }
    });
    
