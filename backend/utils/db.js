import mongoose from "mongoose";

const connectDB = async () => {
    const url = process.env.MONGO_URL;
    try {
        const connection = await mongoose.connect(url, {
            dbName: 'pphe'
        });
        if (connection) {
            console.log("Database connected successfully !!!");
        }
    } catch (error) {
        console.log("Error in connecting database..." + error);
    }
}

export default connectDB; 