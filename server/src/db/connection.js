import mongoose from "mongoose";

export const connectDB = async (mongo_uri) => {
    return await mongoose.connect(mongo_uri);
};
