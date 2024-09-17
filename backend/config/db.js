import mongoose from "mongoose";

export const connectDB= async ()=>{
  await mongoose.connect('mongodb+srv://amanbhaiya:golu8558@cluster0.ycuni.mongodb.net/desi-dine').then(()=>{console.log("DB connected");
  })
}//mongodb+srv://amanbhaiya:<db_password>@cluster0.ycuni.mongodb.net/?