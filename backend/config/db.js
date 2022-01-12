import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`.bgCyan);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;