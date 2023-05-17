import mongoose from "mongoose";

const connectDB = async (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Something went wrong with DB"));
};

export default connectDB;
