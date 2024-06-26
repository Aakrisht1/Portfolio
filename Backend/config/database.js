import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then((c) => {
        console.log(`MongoDB connected with HOST: ${c.connection.host}`);
    })
    .catch((e) => {
        console.log(e);
    })
}