import {MongoClient} from "mongodb"
// import clientPromise from "../../lib/mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

export default async (req:any, res:any) => {
    // try {

        const client = await( new MongoClient(uri,options));
        // res.json(uri);

        const db = client.db("sample_mflix");
 
        const movies = await db
            .collection("comments")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
 
        res.json(movies);
    // } catch (e) {
    //     res.json(e);
    //     // 
    //     console.error(e);
    // }
 };