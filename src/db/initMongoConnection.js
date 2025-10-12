
import mongoose from "mongoose";
import { getEnvVar } from "../utils/getEnvVar.js";




async function initMongoConnection(){
    try {

        const pwd = getEnvVar("MONGODB_PASSWORD");
        const url = getEnvVar("MONGODB_URL");
        const user = getEnvVar("MONGODB_USER");
        const db = getEnvVar("MONGODB_DB");


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
