import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const loginUser= async (req,res)=>{
    const {email,password}= req.body;
    try {
        const user= await userModel.findOne({email});
        if(!user){
            res.json({success:false,message:"Not registered"})
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.json({success:false,message:"Invalid passward"})
        }
        const token= createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"unexpected error"})
    }

}
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}


const registerUser=async (req,res)=>{
   const {name,email,password}=req.body;
   try {
     const exists= await userModel.findOne({email});
    
     if(exists){
        return res.json({success:false,message:"user already exists"});  
     }
     if(!validator.isEmail(email)){
        res.json({success:false,message:"not a valid email,please enter a valid email"})
     }
     if(password.length<8){
        return res.json({success:false,message:"Pasward must be atleast 8 charectors"})
     }

     const salt= await bcrypt.genSalt(10);
     const hashedPassword= await bcrypt.hash(password,salt);

     const newUser= new userModel({
        name:name,
        email:email,
        password:hashedPassword
     })
     const user=await newUser.save();
     const token=createToken(user._id);
     res.json({success:true,token})

   } catch (error) {
     console.log(error);
     res.json({success:false,message:`${error}`})
   }
}

export {loginUser,registerUser};