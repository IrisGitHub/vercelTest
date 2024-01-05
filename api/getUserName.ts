import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient } from 'mongodb'
const CONNECTION_STRING = "mongodb+srv://<mongodb&password>@cluster0.5qpys0r.mongodb.net/";
module.exports = async (req: NowRequest, res: NowResponse) => {
    const client = await MongoClient.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = await client.db('story');
    var result = await db.collection("mainData").find().toArray();
    res.status(200).json(result);
}