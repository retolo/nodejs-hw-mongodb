
import mongoose from "mongoose";





async function initMongoConnection(){
    try {

        const pwd = process.env.MONGODB_PASSWORD;
        const url = process.env.MONGODB_URL;
        const user = process.env.MONGODB_USER;
        const db = process.env.MONGODB_DB;

        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`
        )
        console.log("Mongo connection successfully established!");
    } catch (error) {
        console.log('Error while setting up mongo connection', error);
        throw error
    }
}


export default initMongoConnection;
