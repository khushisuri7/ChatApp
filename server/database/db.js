import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

const Connection=async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-y6spasj-shard-00-00.oyjyj9g.mongodb.net:27017,ac-y6spasj-shard-00-01.oyjyj9g.mongodb.net:27017,ac-y6spasj-shard-00-02.oyjyj9g.mongodb.net:27017/?ssl=true&replicaSet=atlas-zcgiiz-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, {useUnifiedTopology : true});
       console.log("Database connected successfully");

    }
    catch(error){ 
        console.log("ERROR while connecting database", error.message);

    }
}
export default Connection;