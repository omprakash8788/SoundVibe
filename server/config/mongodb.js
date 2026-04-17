import mongoose from "mongoose";

const connectDB=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("connected to databased")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/soundvibe`)
}
export default connectDB;