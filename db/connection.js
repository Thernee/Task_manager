import mongoose from "mongoose";
// import dotenv from 'dotenv';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected to DB...');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;