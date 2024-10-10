import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

// Connect to MongoDB

const connectDB = async (DB)=>{
  try {
    await mongoose.connect(process.env.DB).then(()=> console.log("Connected to MongoDB..."))
    .catch(error=>console.log('Failed to connect to MongoDB', error));
    
  } catch (error) {
    console.log('Failed to connect to MongoDB -',error)
  }
}
export default connectDB;