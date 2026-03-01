import mongoose from "mongoose";

export const ConnectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ITI_NestLJS", {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}