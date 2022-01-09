import mongoose from 'mongoose'

export async function connectToMongo():Promise<void> {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
    }
    catch(err) {
        console.log("did not connect to db");
    }
}
  