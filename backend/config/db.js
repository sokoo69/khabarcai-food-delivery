import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shawon:shawon123@cluster0.gr6lr.mongodb.net/khabarcai').then(()=>console.log("DB Connected"))
}

