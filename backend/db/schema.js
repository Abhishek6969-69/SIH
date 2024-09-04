const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Abhishek123:ltQtOffYtlrC6nSg@cluster0.3n1rl3i.mongodb.net/Alumini?retryWrites=true&w=majority&appName=Cluster0");
const userschema=new mongoose.Schema({
   
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }, 
   
 
    
})
const User=mongoose.model("user",userschema);


module.exports={
    User,
}