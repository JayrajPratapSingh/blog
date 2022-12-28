const express = require("express")
const {Register, Login, Posts} = require("./model")
const mongoose = require("mongoose");
const app= express();


const bodyParser = require("body-parser")
const port = process.env.PORT || 8000



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());




mongoose.connect("mongodb+srv://jayrajtodo:jai12345@cluster0.pvfaed6.mongodb.net/?retryWrites=true&w=majority/blogApp", {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})



app.get("/", (async(req,res)=>{
    const getregisters = await Register.find();
    res.status(200).json({sucess:true, getregisters});
}))



//Register
app.post("/register", async(req, res)=>{
const registers = await Register.create(req.body);
res.status(200).json({sucess:true, registers});
})

//Login
app.post("/", async(req,res)=>{
    const registers = await Register.findOne(Login);
res.status(200).json({sucess:true, registers});
})

//createPost

app.post("/create", async(req,res)=>{
    const createPosts = await Posts.create(req.body);
    res.status(200).json({sucess:true, createPosts});
})

//Posted Data

app.get("/home", async(req,res)=>{
    const getPosts = await Posts.find();
    res.status(200).json({sucess:true, getPosts})
})



app.listen(port, ()=>{
console.log(`server is running at port no ${port}`)
})
