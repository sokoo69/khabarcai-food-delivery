import mongoose from "mongoose";

export const  connectDB = async () =>{
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/khabarcai';
    await mongoose.connect(mongoURI).then(()=>console.log("DB Connected"))
}

