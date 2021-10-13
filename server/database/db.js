import mongoose from "mongoose";



const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.vg3yw.mongodb.net:27017,ecommerceweb-shard-00-01.vg3yw.mongodb.net:27017,ecommerceweb-shard-00-02.vg3yw.mongodb.net:27017/PROJECT?ssl=true&replicaSet=atlas-dk5qcj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;