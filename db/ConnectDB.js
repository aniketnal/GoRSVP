import mongoose from "mongoose";

const connectDB = async () => {
    const mongoURI = "mongodb://127.0.0.1:27017/GoRSVP";
    try {
        const conn = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;