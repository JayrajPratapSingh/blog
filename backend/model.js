const mongoose = require("mongoose");


const registerSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    }
});

const Register = new mongoose.model("Register", registerSchema);


const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

const Login = new mongoose.model("Login", LoginSchema);



const PostsSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    image:{
        type:String
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    }
})

const Posts = new mongoose.model("Posts", PostsSchema);


module.exports = {Register, Login, Posts};